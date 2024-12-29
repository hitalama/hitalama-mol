namespace $.$$ {

	export class $shm_hitalama_board_block_float extends $.$shm_hitalama_board_block_float {

		@ $mol_mem
		body_x_stick( next?: number ) {
			return this.block().Body_x(next)?.val(next) ?? 0
		}

		@ $mol_mem
		body_y_stick( next?: number ) {
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

		ref_str() {
			return this.block().ref().description ?? ''
		}

		ref_code(): string {
			return "const block = board.block( '" + this.ref_str() + "' )"
		}

		@ $mol_mem
		opacity( next?: number ) {
			return this.block().Opacity(next)?.val(next) ?? 1
		}

		@ $mol_mem
		font_size( next?: number ) {
			return this.block().Font_size(next)?.val(next) ?? 16
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

		@ $mol_mem
		color( next?: string ) {
			console.log('next', next)
			if( next === undefined ) return this.block().Color()?.val() || 'var(--mol_theme_text)'
			const color = next || 'var(--mol_theme_text)'
			return this.block().Color(null)?.val(color)!
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
		transition() {
			return ( this.dragged() || this.resizing() ) ? 'none' : this.transition_smooth()
		}
		
		on_drag_start( event: PointerEvent ) {
			super.on_drag_start( event )
			this.selected( true )
		}
		
	}

}
