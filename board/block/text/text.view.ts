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
			return this.block().Text( next )?.text( next ) ?? ''
		}

		blocker_pointerdown_last?: PointerEvent
		blocker_pointerdown( next?: any ) {
			this.blocker_pointerdown_last = this.selected() ? next : undefined
		}
		blocker_pointerup( next?: any ) {
			if( !this.blocker_pointerdown_last ) return
			const { x, y } = this.blocker_pointerdown_last

			if( Math.abs( x - next.x ) < 5 && Math.abs( y - next.y ) < 5 ) {
				this.editing( true )
				this.Text().Edit().focused(true)
				;( this.Text().Edit().dom_node_actual() as HTMLTextAreaElement ).select()
			}
		}

		@ $mol_mem
		editing( next?: boolean ): boolean {
			if( this.selected() === false ) return false
			return next ?? false
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
		
	}

}
