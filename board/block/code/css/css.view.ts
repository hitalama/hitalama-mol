namespace $.$$ {
	export class $shm_hitalama_board_block_code_css extends $.$shm_hitalama_board_block_code_css {
		
		@ $mol_mem
		preprocessed() {
			const template = this.block().Text()?.text() ?? ''
			const func = new Function( 'const board = this.board;\nconst page = this.page;\nreturn `' + template + '`' )
			return func.call( { page: this.Board_page(), board: this.board() } )
		}

		@ $mol_mem
		attach() {
			if( !this.enabled() ) return null

			const code = this.preprocessed()
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
