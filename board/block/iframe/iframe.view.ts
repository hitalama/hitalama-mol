namespace $.$$ {

	export class $shm_hitalama_board_block_iframe extends $.$shm_hitalama_board_block_iframe {

		uri_used() {
			return this.block().text().indexOf('\n') == -1
		}
		
		uri_edit() {
			return this.uri_used() ? super.uri_edit() : []
		}

		iframe_on_load() {
			try {
				const iframe = this.Iframe().dom_node_actual() as HTMLIFrameElement
				this.iframe_title( iframe.contentWindow?.document.title ) 
			} catch (error) {
				console.error( error )
				this.iframe_title( this.uri() ) 
			}
		}

		@ $mol_mem
		iframe_title( next?: string ): string {
			return next ?? this.uri() ?? ''
		}
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().text( next )
		}
		
		@ $mol_mem
		uri(): string {
			if( !this.uri_used() ) return ''
			return this.block().text() ?? ''
		}

		html_update() {
			this.html(null)

			const text = this.block().text()
			if( this.uri_used() ) {
				return null
			}
			
			const board_path = this.board().toString().replace( /</g, '(' ).replace( />/g, ')' ).replaceAll( /"/g, "'" )
				.replace(
					/\$hyoo_crus_glob\.Land\(([^)]+)\)/,
					`$hyoo_crus_glob.Land(parent.window.$hyoo_crus_ref('$1'))`
				)

			let board_refs_code = ''
			const html = text.replaceAll( /board\.block[^\s]+/g, match => {
				board_refs_code += 'this.' + match + ';\n'
				const replaced = match.replace( 'board', 'window.parent.'+board_path )
				return replaced
			} )

			if( board_refs_code ) {
				const func = new Function( 'const board = this.board;\nconst page = this.page;\nconst view = this.view;\n'+ board_refs_code )
				func.call( { page: this.Board_page(), board: this.board() } )
			}

			setTimeout(() => this.html( html ), 0)
		}

		@ $mol_mem
		blocker(): readonly ( any )[] {
			return (this.dragged() || this.resizing()) ? super.blocker() : []
		}

		@ $mol_mem
		editing(): boolean {
			return this.uri_edit_focused()
		}

		@ $mol_mem
		tg_post() {
			const match = this.uri().match( /https:\/\/t\.me\/(.+)/ )
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
		
		@ $mol_action
		add_code_block() {
			const left = this.left() + this.width()
			const top = this.top()

			const code = this.board().block_add( 'code', [ left, top ], 1220, 680 )
			code?.Use_text_from(null)?.remote( this.block() )
		}
		
	}

}
