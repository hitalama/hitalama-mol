namespace $.$$ {

	export class $shm_hitalama_board_block_code extends $.$shm_hitalama_board_block_code {

		@ $mol_mem
		block_with_text() {
			const use_from = this.block().Use_text_from()?.remote()
			return use_from ?? this.block()
		}
		
		@ $mol_mem
		code( next?: string ): string {
			return this.block_with_text().text( next ) ?? ''
		}

		@ $mol_mem
		moment_start( next?: $mol_time_moment ) {
			return next ?? null
		}

		@ $mol_mem
		moment_start_formated() {
			return this.moment_start()?.toString('hh:mm:ss') ?? ''
		}

		@ $mol_action
		set_time_start() {
			this.time_start( performance.now() )
			this.moment_start( new $mol_time_moment )
		}

		page() {
			return this.Board_page()
		}

		time_end?: number
		@ $mol_action
		run() {
			this.set_time_start()

			try {
				const res = this.board().execute( this.code(), { page: this.Board_page(), this_block: this.block(), view: this } )
				this.result( res )
				
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

		result_view() {
			const res = this.result()
			if( res === null ) return []
			if( res._format == 'table' ) return [ this.Result_table() ]
			return [ this.Result() ]
		}
		
		@ $mol_mem
		result_table_rows() {
			return this.result().table.rows
		}

		@ $mol_mem
		result_table_col_ids() {
			const head: string[] = this.result().table.head
			return head.map( (_,i) => i )
		}

		@ $mol_mem_key
		col_head_content( n: number ) {
			const head: string[] = this.result().table.head
			return [ head?.[n] || '' ]
		}

		@ $mol_mem
		time_passed() {
			const start = this.time_start()
			if( start ) {
				let end = performance.now()
				if( this.time_end && this.time_end > start ) {
					end = this.time_end
				} else {
					$mol_state_time.now(200)
				}

				const dt = end - start
				const min = Math.floor( dt / 60000 )
				const ms = dt - min*60000
				return super.time_passed().replace( '{start}', this.moment_start_formated() )
					.replace( '{passed}', String(min).padStart(2, '0') + ':' + String((ms/1000).toFixed(3)).padStart(6, '0') )
			}

			return ''
		}

	}

}
