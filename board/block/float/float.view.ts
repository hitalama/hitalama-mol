namespace $.$$ {

	export class $shm_hitalama_board_block_float extends $.$shm_hitalama_board_block_float {

		repos_x( val: number ): number {
			return val / this.zoom()
		}
		
		repos_y( val: number ): number {
			return val / this.zoom()
		}
		
		@ $mol_mem
		x_stick( next?: number ) {
			return this.block().Body_x(next)?.val(next) ?? 0
		}

		@ $mol_mem
		y_stick( next?: number ) {
			return this.block().Body_y(next)?.val(next) ?? 0
		}

		@ $mol_mem
		bottom_edge_y_stick( next?: number ) {
			return this.block().Bottom_edge_y(next)?.val(next) ?? 0
		}

		@ $mol_mem
		right_edge_x_stick( next?: number ) {
			return this.block().Right_edge_x(next)?.val(next) ?? 0
		}

		@ $mol_mem
		top_edge_y_stick( next?: number ) {
			return this.block().Top_edge_y(next)?.val(next) ?? 0
		}

		@ $mol_mem
		left_edge_x_stick( next?: number ) {
			return this.block().Left_edge_x(next)?.val(next) ?? 0
		}

		title(): string {
			return this.block().title()
		}

		bind_view() {
			this.block().view( this )
		}

		copy_code() {
			return this.copy_code_template().replace( '{ref}', this.block().ref().description?.toString()! )
		}

		@ $mol_mem
		opacity( next?: number ) {
			return this.block().Opacity(next)?.val(next) ?? 1
		}

		opacity_str(): string {
			return this.opacity().toString()
		}

		edges(): readonly ( any )[] {
			return this.selected() ? super.edges() : []
		}

		toolbar(): readonly ( any )[] {
			return this.selected() ? super.toolbar() : []
		}

		@ $mol_mem
		toolbar_transform() {
			return `translateY(-100%) scale(${ 1 / this.zoom() })`
		}

		@ $mol_mem
		transition() {
			return ( this.dragged() || this.resizing() ) ? 'none' : this.transition_smooth()
		}
		
		on_drag_start( event: PointerEvent ) {
			super.on_drag_start( event )
			this.selected( true )
		}
		
		@ $mol_mem
		has_scrollbar() {
			const el = this.Content().dom_node_actual()
			return el.scrollHeight > el.clientHeight
		}

		pointerdown_last?: PointerEvent
		pointerdown( event: PointerEvent ) {
			this.pointerdown_last = event
		}

		event_contextmenu( event: PointerEvent ) {
			if( ['INPUT', 'TEXTAREA'].includes( (event?.target as HTMLElement)?.nodeName ) ) {
				return
			}

			event.preventDefault()

			if( !this.pointerdown_last
				|| is_panning( this.pointerdown_last, event )
			) return
			
			this.on_contextmenu( event )
		}
		
		pointerenter( next?: any ) {
			this.hovered( true )
		}

		pointerleave( next?: any ) {
			this.hovered( false )
		}

		@ $mol_action
		customizer_add() {
			const left = this.left() + this.width()
			const top = this.top()

			const block = this.board().block_add( 'customizer', [ left, top ], 180, 290 )
			// block?.Use_chart_from(null)?.remote( this.block() )

			this.Board_page().contextmenu_showed( false )
		}
		
	}

	function is_panning( start: PointerEvent, end: PointerEvent ) {

		if( end.timeStamp - start?.timeStamp > 500
			|| Math.abs(end.x - start?.x) > 10
			|| Math.abs(end.y - start?.y) > 10
		) return true

		return false

	}

}
