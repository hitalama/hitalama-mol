namespace $.$$ {

	export class $shm_hitalama_dashboard_block_float extends $.$shm_hitalama_dashboard_block_float {

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

		_pointerdown?: $mol_dom_listener
		@ $mol_action
		select( by_event?: PointerEvent ) {
			this._pointerdown?.destructor()
			this.selected( true )
		}

		@ $mol_action
		resize_start( event: any ) {
			this.select( event )
		}

		drag_end() {
			super.drag_end()
			this.select()
		}
		
	}

}
