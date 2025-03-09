namespace $.$$ {

	class Code_line extends $mol_text_code_line {
		minimal_height(): number {
			return 0
		}
	}

	export class $shm_hitalama_board_block_text extends $.$shm_hitalama_board_block_text {
		
		@ $mol_memo.field
		get $() {
			return super.$.$mol_ambient({
				$mol_text_code_line: Code_line,
			})
		}

		@ $mol_mem
		textarea_height() {
			return this.editing() ? 'auto' : super.textarea_height()
		}

		@ $mol_mem
		text( next?: string ): string {
			if( !this.editing() ) return this.text_rendered()
			return this.block().Text( next )?.text( next ) ?? ''
		}
		
		@ $mol_mem
		text_rendered() {
			return this.block().preprocessed()
		}

		blocker_pointerdown_last?: PointerEvent
		blocker_pointerdown( next?: any ) {
			this.blocker_pointerdown_last = this.selected() ? next : undefined
		}
		blocker_pointerup( next?: any ) {
			if( !this.blocker_pointerdown_last ) return
			const { x, y } = this.blocker_pointerdown_last

			if( Math.abs( x - next.x ) < 5 && Math.abs( y - next.y ) < 5 ) {
				this.Text().Edit().focused(true)
				;( this.Text().Edit().dom_node_actual() as HTMLTextAreaElement ).select()
			}
		}

		@ $mol_mem
		editing(): boolean {
			if( this.selected() && this.text_focused() ) return true
			return false
		}

		@ $mol_mem
		blocker(): readonly ( any )[] {
			return this.editing() ? [] : super.blocker()
		}

		@ $mol_mem
		blob_uri() {
			const blob = this.block().Image()?.blob()
			if( !blob ) return null
			return this.$.$mol_blob_uri( blob )
		}

		@ $mol_mem
		image_uri(): string {
			this.block().Image()?.blob()
			const uri = $mol_wire_sync(this).blob_uri()
			return uri ?? ''
		}

		@ $mol_mem
		image() {
			const uri = this.image_uri()
			return uri ? super.image() : []
		}

		@ $mol_mem
		ratio() {
			if( !this.image() ) return 0
			const img = this.Image()
			return img.natural_width() / img.natural_height()
		}
		

		@ $mol_mem
		font_size( next?: number ) {
			if( next !== undefined ) this.board().Last_font_size(null)?.val(next)
			
			return this.block().Font_size(next)?.val(next) ?? 14
		}

		@ $mol_mem
		font_tools() {
			const text = this.block().Text()?.value() || ''
			return text === '' ? [] : super.font_tools()
		}

		@ $mol_mem
		font_size_px() {
			return this.font_size() + 'px'
		}

		font_size_suggests(): readonly ( string )[] {
			return this.font_size_options().map( n => n.toString() )
		}

		font_size_inc() {
			const current = this.font_size()
			const options = this.font_size_options()
			const next = options.find( n => n > current )
			if( next ) this.font_size( next )
		}

		font_size_dec() {
			const current = this.font_size()
			const options = this.font_size_options()
			const next = options.findLast( n => n < current )
			if( next ) this.font_size( next )
		}

		font_size_selected( next?: string ): string {
			if( next ) this.font_size( Number( next ) )
			return next ?? ''
		}

		@ $mol_mem
		color( next?: string ) {
			if( next === undefined ) return this.block().Color()?.val() || 'var(--mol_theme_text)'

			this.board().Last_color(null)?.val(next)
			return this.block().Color(null)?.val(next)!
		}
		
	}

}
