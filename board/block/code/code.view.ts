namespace $.$$ {

	export class $shm_hitalama_board_block_code extends $.$shm_hitalama_board_block_code {

		@ $mol_mem
		block_with_text() {
			const use_from = this.block().Use_text_from()?.remote()
			return use_from ?? this.block()
		}
		
		@ $mol_mem
		code( next?: string ): string {
			return this.block_with_text().Text( next )?.text( next ) ?? ''
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

		time_end?: number
		@ $mol_action
		run() {
			this.set_time_start()

			const func = new Function( 'const board = this.board;\nconst page = this.page;\nconst view = this.view;\n'+ this.code() )
			func.call( { page: this.Board_page(), board: this.board(), vide: this } )

			this.time_end = performance.now()
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
