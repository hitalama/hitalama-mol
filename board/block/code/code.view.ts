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

		run() {
			const func = new Function( 'const board = this.board;\nconst page = this.page;\nconst view = this.view;\n'+ this.code() )
			func.call( { page: this.Board_page(), board: this.board(), vide: this } )
		}
		
	}

}
