namespace $.$$ {

	export class $shm_hitalama_board_block_form extends $.$shm_hitalama_board_block_form {
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}

		@ $mol_mem
		form() {
			return this.block().Form(null)!
		}

		// @ $mol_mem
		// editing(): boolean {
		// 	return this.input_focused()
		// }
		
	}

}
