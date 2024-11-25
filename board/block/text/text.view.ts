namespace $.$$ {

	export class $shm_hitalama_board_block_text extends $.$shm_hitalama_board_block_text {
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? ''
		}

		pointerdown_event?: PointerEvent
		pointerdown( next?: any ) {
			this.pointerdown_event = this.selected() ? next : undefined
		}
		pointerup( next?: any ) {
			if( !this.pointerdown_event ) return
			const { x, y } = this.pointerdown_event

			if( Math.abs( x - next.x ) < 5 && Math.abs( x - next.x ) < 5 ) {
				this.editable( true )
				this.Text().Edit().focused(true)
				;( this.Text().Edit().dom_node_actual() as HTMLTextAreaElement ).select()
			}
		}

		@ $mol_mem
		editable( next?: boolean ): boolean {
			// console.trace()
			console.log('editable next', next)
			console.log('this.selected()', this.selected())
			if( this.selected() === false ) return false
			return next ?? false
		}

		@ $mol_mem
		blocker(): readonly ( any )[] {
			console.log('this.editable()', this.editable())
			return this.editable() ? [] : super.blocker()
		}

		@ $mol_mem
		blob_uri() {
			const blob = this.block().Image()?.blob()
			if( !blob ) return null
			return this.$.$mol_blob_uri( blob )
		}

		@ $mol_mem
		image_uri(): string {
			const uri = $mol_wire_sync(this).blob_uri()
			return uri ?? ''
		}

		@ $mol_mem
		image() {
			const uri = this.image_uri()
			return uri ? super.image() : []
		}
		
	}

}
