namespace $.$$ {

	export class $shm_hitalama_board_block_input extends $.$shm_hitalama_board_block_input {
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}

		@ $mol_mem
		editing(): boolean {
			return this.input_focused()
		}
		
	}

}
