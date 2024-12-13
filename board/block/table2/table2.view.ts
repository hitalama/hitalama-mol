namespace $.$$ {

	export class $shm_hitalama_board_block_table2 extends $.$shm_hitalama_board_block_table2 {
		
		@ $mol_mem
		records() {
			return this.block().Table()?.val()?.rows ?? []
		}
		
		col_head_content( id : string ) {
			return [ this.block().Table()?.val()?.head?.[  Number( id ) ] ?? '' ]
		}
		
	}

}
