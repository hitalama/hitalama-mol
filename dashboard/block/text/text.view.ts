namespace $.$$ {

	export class $shm_hitalama_dashboard_block_text extends $.$shm_hitalama_dashboard_block_text {
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block().Text( next )?.text( next ) ?? 'text'
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
				// this.selection([ 1, 1 ])
				this.Text().Edit().focused(true)
				;( this.Text().Edit().dom_node_actual() as HTMLTextAreaElement ).select()
			}
		}

		@ $mol_mem
		editable( next?: boolean ): boolean {
			if( this.selected() === false ) return false
			return next ?? false
		}

		blocker(): readonly ( any )[] {
			return this.editable() ? [] : super.blocker()
		}
		
	}

}
