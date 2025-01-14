namespace $ {
	
	type AsyncDuckDBConnection = import('@duckdb/duckdb-wasm').AsyncDuckDBConnection

	export class $shm_hitalama_duckdb extends $mol_object2 {
		
		// @ $mol_action
		static async db() {
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
			for (const file of files) {
				await db.registerFileBuffer( file.name, file.buffer )
			}
			return db.connect()
		}

	}

}
