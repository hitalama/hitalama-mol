namespace $.$$ {

	export class $shm_hitalama_board_pane extends $.$shm_hitalama_board_pane {

		select_start( event: PointerEvent ) {
			if( event?.button == 2 ) return

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
		
		pointer_client_pos: [ number, number ] = [ 0, 0 ]
		pointer_move( event?: PointerEvent ) {
			this.pointer_client_pos = [ event!.clientX, event!.clientY ]
			this.real_pointer_pos( this.to_real_pos(  this.client_pos_to_pane_pos( this.pointer_client_pos ) ) )
		}

		pointer_down( event?: PointerEvent ) {
			if( event?.button == 2 ) {
				this.viewport_shifting( true )
			}
		}

		ctrl_pressed( next?: boolean ): boolean {
			return this.viewport_shifting( next )
		}

		allow_zoom() {
			return this.viewport_shifting() ? true : false
		}

		pointer_up( event?: PointerEvent ) {
			if( event?.button == 2 ) this.viewport_shifting( false )
		}

		pane_contextmenu( event?: PointerEvent ) {
			event?.preventDefault()
		}

		pointer_pos(): readonly ( any )[] {
			return this.client_pos_to_pane_pos( this.pointer_client_pos )
		}

		@ $mol_mem
		real_pointer_pos( next?: number[] ): readonly ( any )[] {
			return next ?? super.real_pointer_pos()
		}

		to_real_pos( [x,y]: readonly [number, number] ) {
			const shift = this.shift()
			const zoom = this.zoom()
			return [
				(x - shift[0])/zoom,
				(y - shift[1])/zoom,
			]
		}

		client_pos_to_pane_pos( client_pos: readonly [ number, number ] | readonly number[] ) {
			const { left, top } = this.dom_node().getBoundingClientRect()
			let x = client_pos[0] - left
			let y = client_pos[1] - top

			return [ x, y ] as const
		}
	
		select_rect() {
			return this.selecting() ? super.select_rect() : []
		}

		select_rect_pos() {
			return this.client_pos_to_pane_pos([
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

		@ $mol_mem
		transform() {
			const [ shift_x, shift_y ] = this.shift()
			const scale = this.zoom()
			const pos_x = shift_x
			const pos_y = shift_y
			return `translate3d(${ pos_x }px,${ pos_y }px,0px) scale(${ scale })`
		}

		@ $mol_mem
		zoom( next?: number ) {
			return this.$.$mol_state_local.value( this.toString() + 'zoom', next ) ?? 1
		}

		@ $mol_mem
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number> {
			if( next === undefined ) return new this.$.$mol_vector_2d( 
				... (this.$.$mol_state_local.value( this.toString() + 'shift' ) ?? [0,0]) as [number, number] 
			)
			return this.$.$mol_state_local.value( this.toString() + 'shift', next ) ?? super.shift()
		}
		
		@ $mol_mem
		keydown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keydown',
				$mol_wire_async( event => {
					if( event.key == 'Control' ) {
						this.ctrl_pressed( true )
					}
					else if( event.key == 'Shift' ) {
						this.shift_pressed( true )
					}
				} ),
			)
		}

		@ $mol_mem
		keyup_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keyup',
				$mol_wire_async( event => {
					if( event.key == 'Control' ) {
						this.ctrl_pressed( false )
					}
					else if( event.key == 'Shift' ) {
						this.shift_pressed( false )
					}
				} ),
			)
		}

		wheel( event: WheelEvent ) {
			this.ctrl_pressed( event.ctrlKey )
			this.shift_pressed( event.shiftKey )

			if( this.viewport_shifting() ) return
			// if( this.prevent_shift() ) return

			const shift = this.shift()

			if( this.shift_pressed() && (Math.abs(event.deltaX) == 0) ) {

				if( this.prevent_shift_x() ) return
				this.shift( new this.$.$mol_vector_2d( shift.x - event.deltaY, shift.y ) )

			} else {
				this.shift( new this.$.$mol_vector_2d(
					shift.x - (this.prevent_shift_x() ? 0 : event.deltaX),
					shift.y - (this.prevent_shift_y() ? 0 : event.deltaY),
				) )
			}
		}

		@ $mol_mem
		content_pointer_events(): string {
			return this.viewport_shifting() ? 'none' : 'auto'
		}

	}

}
