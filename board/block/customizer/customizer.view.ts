namespace $.$$ {
	export class $shm_hitalama_board_block_customizer extends $.$shm_hitalama_board_block_customizer {

		@ $mol_mem
		title( next?: string ): string {
			return this.block().Custom()?.remote()?.title( next ) ?? ''
		}
		
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

		@ $mol_mem
		visible_in_menu( next?: boolean ): boolean {
			return this.block().Custom()?.remote()?.Visible_in_contextmenu( next )?.val( next ) ?? false
		}

		@ $mol_action
		create_instance() {
			const block = this.board().block_add( 'custom', this.Board_page().get_pointer_pos() )
			block?.Type_custom(null)?.remote( this.block().Custom()?.remote() )
		}
		
	}
}
