namespace $.$$ {
	export class $shm_hitalama_board_block_customizer extends $.$shm_hitalama_board_block_customizer {
		
		@ $mol_mem
		code_js( next?: string ): string {
			return this.block().Custom()?.remote()?.Code_js( next )?.text( next ) ?? ''
		}

		@ $mol_mem
		code_view_tree( next?: string ): string {
			return this.block().Custom()?.remote()?.Code_view_tree( next )?.text( next ) ?? ''
		}

		@ $mol_mem
		code_css( next?: string ): string {
			return this.block().Custom()?.remote()?.Code_css( next )?.text( next ) ?? ''
		}
		
	}
}
