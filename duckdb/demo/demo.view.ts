namespace $.$$ {
	
	type AsyncDuckDBConnection = import('@duckdb/duckdb-wasm').AsyncDuckDBConnection

	export class $shm_hitalama_duckdb_demo extends $.$shm_hitalama_duckdb_demo {

		file_dict() {
			const dict = {
				...Object.fromEntries( this.remote_files().map( f => [ f.name, f.name ] ) ),
				...Object.fromEntries( this.files().map( f => [ f.ref().description, f.name() ] ) )
			}
			return dict
		}

		remote_url() {
			return $.$mol_dom_context.document?.location.host == 'localhost:9080'
				? 'http://localhost:9080/shm/hitalama/app/-/shm/hitalama/duckdb/parquet/demo.parquet' : super.remote_url()
		}

		remote_files() {
			return this.remote_file_urls().map( url => ({
				name: url.split('/').at(-1),
				url,
			}) )
		}

		@ $mol_mem
		files() {
			return $shm_hitalama_profile.current()?.Files()?.remote_list() ?? []
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $hyoo_crus_file )
		}

		@ $mol_mem_key
		file_name( id: string ) {
			const remote = this.remote_files().find( f => f.name == id )
			if( remote ) return id

			return this.file( $hyoo_crus_ref( id ) )?.name() ?? ''
		}

		@ $mol_mem
		query_default() {
			const name = this.file_name( this.file_id() )
			return name ? `SELECT * FROM parquet_scan('${name}')` : ''
		}

		@ $mol_mem
		query( next?: string ) {
			return next ?? this.query_default()
		}

		@ $mol_mem_key
		file_buffer( id: string ) {
			const remote = this.remote_files().find( f => f.name == id )
			if( remote ) {
				const buffer = $mol_fetch.buffer( remote.url, {cache: "no-store"} )
				return new Uint8Array( buffer )
			}
			const file = this.files().find( f => f.Name()?.val() == id )
			return file?.buffer()!
		}

		async duckdb_db() {
			const JSDELIVR_BUNDLES = $shm_hitalama_duckdb_lib.getJsDelivrBundles()

			const bundle = await $shm_hitalama_duckdb_lib.selectBundle( JSDELIVR_BUNDLES )

			const worker_url = URL.createObjectURL(
				new Blob( [ `importScripts("${ bundle.mainWorker! }");` ], { type: 'text/javascript' } )
			)

			const worker = new Worker( worker_url )
			const logger = new $shm_hitalama_duckdb_lib.ConsoleLogger()
			const db = new $shm_hitalama_duckdb_lib.AsyncDuckDB( logger, worker )
			await db.instantiate( bundle.mainModule, bundle.pthreadWorker )
			URL.revokeObjectURL( worker_url )
			console.log( 'db', db )
			return db
		}

		run( next?: any ) {
			this.current( { file_name: this.file_name( this.file_id() ), query: this.query() } )
		}

		async load_parquet( file_name: string, buffer: Uint8Array, query: string ) {
			let conn_prom: Promise<AsyncDuckDBConnection> | null
			const load_db = async () => {
				if( conn_prom ) {
					return conn_prom
				}
				const db = await this.duckdb_db()
				console.log('	', buffer)
				await db.registerFileBuffer( file_name, buffer )
				conn_prom = db.connect()
				return conn_prom
			}

			const get_query = async ( q: string ) => {
				const conn = await conn_prom
				const results = await conn!.query( q )
				conn?.close()
				// for await (const batch of await conn!.send(viz_query)) {
				// 	console.log('batch', batch)
				// }
				return results
			}

			await load_db()
			const table = await get_query( query )
			const table_arr = table.slice(0, 100).toArray()

			const result = table_arr.map( ( row: any ) => row.toJSON() )
			return result
		}

		@ $mol_mem
		duckdb_res() {
			if( !this.current()?.file_name ) return null
			const { file_name, query } = this.current()
			const buffer = this.file_buffer( file_name )
			return this.load_parquet( file_name, new Uint8Array(buffer), query || this.query_default() )
		}

	}

}
