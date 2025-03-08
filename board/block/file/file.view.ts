namespace $.$$ {
	export class $shm_hitalama_board_block_file extends $.$shm_hitalama_board_block_file {
		
		name() {
			return this.block().File()?.remote()?.title() ?? ''
		}

		ext() {
			return this.name().split('.').at(-1) ?? ''
		}

		contextmenu_body() {
			return [
				... this.contextmenu_for()[ this.ext() ] ?? [],
				... super.contextmenu_body(),
			]
		}

		unpacking() {
			const pos = this.Board_page().get_pointer_pos()

			const block = this.board().block_add( 'code_sql', pos, 800, 400 )
			const js = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_table_from_sql_result.js' ) )
			block?.text( js )
			block?.subtext( 'SELECT * FROM $'+`value('${this.block().ref().description?.toString()!}')` )

			this.Board_page().contextmenu_showed( false )
		}

		// unpacking_parquet() {
		// 	const pos = this.Board_page().get_pointer_pos()

		// 	const code = this.board().block_add( 'code', pos, 1000, 400 )
		// 	const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_table_from_parquet.js' ) )
		// 		.replaceAll( 'BLOCK_ID', `'${ this.block().ref().description?.toString()! }'` )
		// 	code?.Text(null)?.value( code_str )

		// 	this.Board_page().contextmenu_showed( false )
		// }
		
	}
}
