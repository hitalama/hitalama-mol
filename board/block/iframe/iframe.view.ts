namespace $.$$ {

	export class $shm_hitalama_board_block_iframe extends $.$shm_hitalama_board_block_iframe {
		
		@ $mol_mem
		src( next?: string ): string {
			return this.block().Src( next )?.val( next ) ?? ''
		}

		@ $mol_mem
		blocker(): readonly ( any )[] {
			return (this.dragged() || this.resizing()) ? super.blocker() : []
		}

		@ $mol_mem
		editing(): boolean {
			return this.src_focused()
		}

		@ $mol_mem
		tg_post() {
			const match = this.src().match( /https:\/\/t\.me\/(.+)/ )
			return match?.[1]
		}

		@ $mol_mem
		tg_post_script() {
			const tg_post = this.tg_post()
			if( !tg_post ) return []

			const script = document.createElement( 'script' )
			script.setAttribute( 'src', 'https://telegram.org/js/telegram-widget.js?22' )
			script.setAttribute( 'data-telegram-post', tg_post )
			script.setAttribute( 'data-width', '100%' )
			script.setAttribute( 'async', '' )
			return [ script ]
		}

		@ $mol_mem
		iframe_visible() {
			return this.tg_post() ? [ this.Tg_post_dom() ] : [ this.Iframe() ]
		}
		
	}

}
