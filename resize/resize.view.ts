namespace $.$$ {

	export class $shm_hitalama_resize extends $.$shm_hitalama_resize {

		to_stick( sticks: readonly number[], val: number, shift: number ) {
			for( const stick of sticks ) {
				const to_stick = stick - (val + shift)
				if( Math.abs( to_stick ) < this.stick_threshold() ) {
					return val + to_stick
				}
			}
			return val
		}

		to_stick_x( val: number, shift: number ) {
			return this.to_stick( this.sticks_x(), val, shift )
		}

		to_stick_y( val: number, shift: number ) {
			return this.to_stick( this.sticks_y(), val, shift )
		}

		@ $mol_mem
		body_y( next?: number ): number {
			if( next === undefined ) return 0
			const top_stick = this.to_stick_y( next, this.top_edge_y_stick() )
			if( top_stick == next ) {
				const bottom_stick = this.to_stick_y( next, this.top_edge_y_stick() + this.height() )
				this.body_y_stick( bottom_stick )
			} else {
				this.body_y_stick( top_stick )
			}
			return next
		}

		@ $mol_mem
		body_x( next?: number ): number {
			if( next === undefined ) return 0
			const left_stick = this.to_stick_x( next, this.left_edge_x_stick() )
			if( left_stick == next ) {
				const right_stick = this.to_stick_x( next, this.left_edge_x_stick() + this.width() )
				this.body_x_stick( right_stick )
			} else {
				this.body_x_stick( left_stick )
			}
			return next
		}

		@ $mol_mem
		top_edge_y( next?: number ): number {
			if( next === undefined ) return 0
			const limit = this.bottom_edge_y_stick() - this.height_min()
			const top_edge_y_stick = Math.min( this.to_stick_y( next, this.body_y_stick() ), limit )
			this.top_edge_y_stick( top_edge_y_stick )
			return next
		}

		@ $mol_mem
		bottom_edge_y( next?: number ): number {
			if( next === undefined ) return 0
			const limit = this.top_edge_y_stick() + this.height_min()
			const bottom_edge_y_stick = Math.max( this.to_stick_y( next, this.top() - this.top_edge_y_stick() ), limit )
			this.bottom_edge_y_stick( bottom_edge_y_stick )
			return next
		}

		@ $mol_mem
		left_edge_x( next?: number ): number {
			if( next === undefined ) return 0
			const limit = this.right_edge_x_stick() - this.width_min()
			const left_edge_x_stick = Math.min( this.to_stick_x( next, this.body_x_stick() ), limit )
			this.left_edge_x_stick( left_edge_x_stick )
			return next
		}

		@ $mol_mem
		right_edge_x( next?: number ): number {
			if( next === undefined ) return 0
			const limit =  this.left_edge_x_stick() + this.width_min()
			let right_edge_x_stick = Math.max( this.to_stick_x( next, this.left() - this.left_edge_x_stick() ), limit )
			this.right_edge_x_stick( right_edge_x_stick )
			return next
		}

		@ $mol_mem
		top(): number {
			return this.body_y_stick() + this.top_edge_y_stick()
		}

		@ $mol_mem
		left(): number {
			return this.body_x_stick() + this.left_edge_x_stick()
		}

		@ $mol_mem
		width(): number {
			return this.right_edge_x_stick() - this.left_edge_x_stick()
		}

		@ $mol_mem
		height(): number {
			return this.bottom_edge_y_stick() - this.top_edge_y_stick()
		}

		@ $mol_mem
		height_px(): string {
			return this.height() + 'px'
		}

		@ $mol_mem
		width_px(): string {
			return this.width() + 'px'
		}

		@ $mol_mem
		top_px(): string {
			return this.top() + 'px'
		}

		@ $mol_mem
		left_px(): string {
			return this.left() + 'px'
		}

		on_drag_end() {
			this.vals_to_sticks()
		}

		resize_start( next?: any ) {
			this.resizing( true )
		}

		resize_end() {
			this.on_drag_end()
			this.resizing( false )
		}

		@ $mol_action
		vals_to_sticks() {
			this.body_x( this.body_x_stick() )
			this.body_y( this.body_y_stick() )
			
			this.bottom_edge_y( this.bottom_edge_y_stick() )
			this.right_edge_x( this.right_edge_x_stick() )
			this.top_edge_y( this.top_edge_y_stick() )
			this.left_edge_x( this.left_edge_x_stick() )
		}

	}

}
