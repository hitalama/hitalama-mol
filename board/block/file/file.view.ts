namespace $.$$ {
	export class $shm_hitalama_board_block_file extends $.$shm_hitalama_board_block_file {
		
		name() {
			return this.block().File()?.remote()?.title() ?? ''
		}

		ext() {
			return this.name().split('.').at(-1) ?? ''
		}

		contextmenu_body() {
			return this.contextmenu_for()[ this.ext() ] ?? []
		}

		unpacking() {
			const pos = this.Board_page().get_pointer_pos()

			const code = this.board().block_add( 'code', pos, 800, 400 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_table_from_csv.js' ) )
				.replace( 'BLOCK_ID', `'${ this.block().ref().description?.toString()! }'` )
			code?.Text(null)?.value( code_str )

			this.Board_page().contextmenu_showed( false )
		}
		
	}
}
