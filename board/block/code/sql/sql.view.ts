namespace $.$$ {
	export class $shm_hitalama_board_block_code_sql extends $.$shm_hitalama_board_block_code_sql {
		
		@ $mol_mem
		sql( next?: string ): string {
			return this.block().subtext( next ) ?? ''
		}


		@ $mol_mem
		sql_processed() {
			const sql_source = this.sql()

			const regex = new RegExp('\\$'+'value([^\\s]+)', 'gi')

			const files: $shm_hitalama_file[] = []

			const sql = sql_source.replaceAll( regex, str => {
				const id = str.slice(8,-2)
				const file = this.board().block( id ).File()?.remote()!
				files.push(file)

				const filename = file.title()

				return /parquet$/.test(filename) 
					? `parquet_scan('${filename}')`
					: `'${filename}'`
			} )

			return { sql, files }
		}

		time_end?: number
		@ $mol_action
		run() {
			this.set_time_start()

			try {
				const { sql, files } = this.sql_processed()
				const code = `
				const result = $shm_hitalama_duckdb.files_query( files, sql );
				${this.code()}
				`

				const res = this.board().execute( code, {
					page: this.Board_page(),
					this_block: this.block(),
					view: this,
					sql,
					files,
				} )
				this.result( res ?? null )
				
			} catch (error) {
				if( !$mol_promise_like( error ) ) {
					console.error( error )
					this.result( 'Error:\n' + (error as any).message )
				} else {
					throw error
				}
			}

			this.time_end = performance.now()
		}
		
	}
}
