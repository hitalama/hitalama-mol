namespace $.$$ {

	export class $shm_hitalama_board_block_table extends $.$shm_hitalama_board_block_table {
		
		@ $mol_mem
		rows() {
			return this.block().Table()?.rows() ?? []
		}

		@ $mol_mem
		head() {
			return this.block().Table()?.table_head() ?? []
		}
		
		col_head_content( id : string ) {
			return [ this.head()?.[  Number( id ) ] ?? '' ]
		}
		
	}

}
