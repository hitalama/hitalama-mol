namespace $.$$ {
	export class $shm_hitalama_board_block_code_css extends $.$shm_hitalama_board_block_code_css {
		
		@ $mol_mem
		attach() {
			if( !this.enabled() ) return null

			const code = this.block().preprocessed()
			const id = this.block().ref().description!

			const style_el = this.$.$mol_style_attach( id, code )
			if( style_el ) Object.assign( style_el, {
				destructor() {
					style_el.remove()
				}
			} )
			
			return style_el
		}

		enabled( next?: boolean ): boolean {
			return this.block().Enabled(next)?.val(next) ?? true
		}
		
	}
}
