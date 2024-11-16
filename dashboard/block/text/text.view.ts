namespace $.$$ {

	export class $shm_hitalama_dashboard_block_text extends $.$shm_hitalama_dashboard_block_text {
		
		@ $mol_mem
		text( next?: string ): string {
			console.log('this.block().Text( next )?.text( next )', this.block().Text( next )?.text( next ))
			return this.block().Text( next )?.text( next ) ?? 'text'
		}

		pointerdown_event?: PointerEvent
		pointerdown( next?: any ) {
				// this.selection([ 0, 0 ])
				// ;(this.Content().Edit().dom_node() as any).focus()
				this.pointerdown_event = this.block_selected() ? next : undefined
		}
		pointerup( next?: any ) {
			if( !this.pointerdown_event ) return
			const { x, y } = this.pointerdown_event

			if( Math.abs( x - next.x ) < 5 && Math.abs( x - next.x ) < 5 ) {
				this.editable( true )
				// this.selection([ 1, 1 ])
				this.Text().Edit().focused(true)
				;(this.Text().Edit().dom_node_actual()as any).select()
				// ;(this.Content().Edit().dom_node() as any).focus()
			}
		}

		@ $mol_mem
		block_selected( next?: boolean ): boolean {
			if( next === false ) this.editable( false )
			return super.block_selected( next )
		}

		blocker(): readonly ( any )[] {
			return this.editable() ? [] : super.blocker()
		}
		
	}

}
