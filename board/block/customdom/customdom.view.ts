namespace $.$$ {
	export class $shm_hitalama_board_block_customdom extends $.$shm_hitalama_board_block_customdom {
		
		@ $mol_mem
		code( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}

		data?: any
		@ $mol_mem
		Dom() {
			try {
				const func = new Function( 'const board = this.board;\nconst page = this.page;\nconst view = this.view;\n'+ this.code() )
				const res = func.call( { page: this.Board_page(), board: this.board(), view: this } )
				return res
			} catch (error) {
				if( !$mol_promise_like( error ) ) {
					this.data = undefined
				}
				throw error
			}
		}

		@ $mol_action
		add_code_block() {
			const left = this.left() + this.width()
			const top = this.top()

			const code = this.board().block_add( 'code', [ left, top ], 1220, 680 )
			code?.Use_text_from(null)?.remote( this.block() )
		}
		
	}
}
