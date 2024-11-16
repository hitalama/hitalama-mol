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

		_pointerdown?: $mol_dom_listener
		pointerdown( next?: any ) {
			console.log('next', this.block().ref(), next)
			this._pointerdown?.destructor()
			this.selected( true )
			this._pointerdown = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'pointerdown',
				$mol_wire_async( event => {
					if( next == event ) return
					console.log('event', event)
					console.log('even', this.block().ref(), next)
					this.selected( false )
					this._pointerdown?.destructor()
				} ),
			)
		}
		
	}

}
