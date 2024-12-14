namespace $.$$ {

	export class $shm_hitalama_board_block_code extends $.$shm_hitalama_board_block_code {
		
		@ $mol_mem
		code( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}

		run() {
			const func = new Function( 'const board = this.board;\nconst page = this.page;\n'+ this.code() )
			func.call( { page: this.Board_page(), board: this.board() } )
		}
		
	}

}
