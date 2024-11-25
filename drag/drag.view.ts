namespace $.$$ {

	export class $shm_hitalama_drag extends $.$shm_hitalama_drag {

		repos_x( val: number ): number {
			return val
		}
		
		repos_y( val: number ): number {
			return val
		}
		
		start_event?: PointerEvent
		start_pos?: { x: number, y: number }
		pointerdown( event?: any ) {
			
			this.start_event = event
			this.start_pos = { x: this.x(), y: this.y() }

			this.dragged( true )
			this.drag_start( event )
			// console.log('drag_start', event)
			
			const mousemove =  new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mousemove',
				$mol_wire_async( event => {
					this.drag( event )

					this.x( this.start_pos!.x + this.repos_x( event.x - this.start_event!.x ) )
					this.y( this.start_pos!.y + this.repos_y( event.y - this.start_event!.y ) )
				} ),
			)

			const mouseup = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mouseup',
				$mol_wire_async( event => {
					this.dragged( false )
					this.drag_end( event )
					// console.log('drag_end', event)

					mouseup?.destructor()
					mousemove?.destructor()
				} ),
			)
			
		}
		
	}
	
}
