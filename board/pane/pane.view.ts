namespace $.$$ {

	export class $shm_hitalama_board_pane extends $.$shm_hitalama_board_pane {

		select_start( event: PointerEvent ) {
			this.selecting( true )
			this.select_rect_start_x( event.clientX )
			this.select_rect_start_y( event.clientY )
			this.select_rect_end_x( event.clientX )
			this.select_rect_end_y( event.clientY )

			const mousemove =  new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mousemove',
				$mol_wire_async( event => {
					this.select_rect_end_x( event.clientX )
					this.select_rect_end_y( event.clientY )
					this.select_resize( event )
				} ),
			)

			const mouseup = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mouseup',
				$mol_wire_async( event => {
					this.selecting( false )
					mouseup?.destructor()
					mousemove?.destructor()
				} ),
			)
		}
		
		pointer_move( event?: PointerEvent ) {
			this.pointer_client_pos( [ event?.clientX, event?.clientY ] )
		}

		pointer_pos(): readonly ( any )[] {
			return this.to_pane_pos( this.pointer_client_pos() )
		}

		to_pane_pos( client_pos: readonly [ number, number ] | readonly number[] ) {
			const { left, top } = this.dom_node().getBoundingClientRect()
			return [ client_pos[0] - left, client_pos[1] - top ] as const
		}
	
		select_rect() {
			return this.selecting() ? super.select_rect() : []
		}

		select_rect_pos() {
			return this.to_pane_pos([
				Math.min( this.select_rect_start_x(), this.select_rect_end_x() ),
				Math.min( this.select_rect_start_y(), this.select_rect_end_y() ),
			])
		}

		select_rect_size() {
			return [
				Math.abs( this.select_rect_end_x() - this.select_rect_start_x() ),
				Math.abs( this.select_rect_end_y() - this.select_rect_start_y() ),
			]
		}

		@ $mol_mem
		select_rect_left(): string {
			return this.select_rect_pos()[0] + 'px'
		}

		@ $mol_mem
		select_rect_top(): string {
			return this.select_rect_pos()[1] + 'px'
		}

		@ $mol_mem
		select_rect_width(): string {
			return this.select_rect_size()[0] + 'px'
		}

		@ $mol_mem
		select_rect_height(): string {
			return this.select_rect_size()[1] + 'px'
		}

	}

}
