namespace $ {
	
	type AsyncDuckDBConnection = import('@duckdb/duckdb-wasm').AsyncDuckDBConnection

	export class $shm_hitalama_duckdb extends $mol_object2 {
		
		@ $mol_mem
		static async db() {
			$mol_wire_solid()
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

			return db
		}

		
		static async file_query( file_name: string, buffer: Uint8Array, query: string ) {
			let conn_prom: Promise<AsyncDuckDBConnection> | null
			const load_db = async () => {
				if( conn_prom ) {
					return conn_prom
				}
				const db = await this.db()
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

		static async connection( files: { name: string, buffer: Uint8Array }[] ) {
			const db = await this.db()
			return await db.connect()
		}

		static async connect_files_async( sources: $shm_hitalama_file[] ) {
			const files = sources.map( f => ({
				name: f.title()!,
				buffer: f.File()?.remote()?.buffer()!
			}) )

			const db = await this.db()
			const connection = await $shm_hitalama_duckdb.connection( files )
			for (const file of files) {
				await db.registerFileBuffer( file.name, file.buffer )
			}

			return connection
		}
		
		@ $mol_mem
		static connect_files( sources?: $shm_hitalama_file[] ) {
			return $mol_wire_sync($shm_hitalama_duckdb).connect_files_async( sources! )
		}
		
		@ $mol_action
		static files_query( files: $shm_hitalama_file[], query: string, limit?: number ) {
			const conn = $shm_hitalama_duckdb.connect_files( files )
			const table = $mol_wire_sync(conn).query( query )
			const res = get_head_and_rows( limit ? table.slice( 0, limit ) : table )
			return res
		}

	}

	function get_head_and_rows( table: Awaited<ReturnType<ReturnType<typeof $shm_hitalama_duckdb.connect_files>[ 'query' ]>> ) {

		const head = []
		const rows: any[][] = []

		for( let col_i = 0; col_i < table.schema.fields.length; col_i++ ) {
			const field = table.schema.fields[col_i]
			head[col_i] = field.name

			const vector = table.getChild( field.name )
			if( !vector ) {
				continue
			}
			const arr = vector.toArray()

			for( let row_i = 0; row_i < arr.length; row_i++ ) {
				rows[ row_i ] = rows[ row_i ] ?? []
				rows[ row_i ][ col_i ] = format_val( field.typeId, arr[row_i] )
			}
		}

		return {head, rows, table: [...table].map( ( row: any ) => row.toJSON() )}
	}

	function get_columns( table: Awaited<ReturnType<ReturnType<typeof $shm_hitalama_duckdb.connect_files>[ 'query' ]>> ) {
		const rec: Record< string, any[] > = {}
		for( let field of table.schema.fields ) {
			const vector = table.getChild( field.name )
			if( !vector ) {
				continue
			}
			rec[ field.name ] = vector.toArray()
		}
		return rec
	}

	function format_val( field_type_id: number, val: any ) {
		if( field_type_id == 8 ) {
			const date = new $mol_time_moment( val )
			return date.toString('DD.MM.YYYY')
		}
		if( typeof val === "bigint" ) return String( val )
		return val
	}

}
