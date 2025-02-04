namespace $.$$ {

	export class $shm_hitalama_board_block_input extends $.$shm_hitalama_board_block_input {
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}
		
		@ $mol_mem
		text_rendered() {
			const template = this.block().Text()?.text() ?? ''
			const func = new Function( 'const board = this.board;\nconst page = this.page;\nreturn `' + template + '`' )
			return func.call( { page: this.Board_page(), board: this.board() } )
		}
		
	}

}
