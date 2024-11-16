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
		top_edge_y( next?: number ): number {
			if( next === undefined ) return 0
			const top_edge_y_stick = this.to_stick_y( next, this.body_y_stick() )
			this.top_edge_y_stick( top_edge_y_stick )
			return next
		}

		@ $mol_mem
		bottom_edge_y( next?: number ): number {
			if( next === undefined ) return 0
			const bottom_edge_y_stick = this.to_stick_y( next, this.top() + this.height_base() - this.top_edge_y_stick() )
			this.bottom_edge_y_stick( bottom_edge_y_stick )
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
		left_edge_x( next?: number ): number {
			if( next === undefined ) return 0
			const left_edge_x_stick = this.to_stick_x( next, this.body_x_stick() )
			this.left_edge_x_stick( left_edge_x_stick )
			return next
		}

		@ $mol_mem
		right_edge_x( next?: number ): number {
			if( next === undefined ) return 0
			const right_edge_x_stick = this.to_stick_x( next, this.left() + this.width_base() - this.left_edge_x_stick() )
			this.right_edge_x_stick( right_edge_x_stick )
			return next
		}

		top(): number {
			return this.body_y_stick() + this.top_edge_y_stick()
		}

		left(): number {
			return this.body_x_stick() + this.left_edge_x_stick()
		}

		width(): number {
			return this.width_base() + this.right_edge_x_stick() - this.left_edge_x_stick()
		}

		height(): number {
			return this.height_base() + this.bottom_edge_y_stick() - this.top_edge_y_stick()
		}

		height_px(): string {
			return this.height() + 'px'
		}

		width_px(): string {
			return this.width() + 'px'
		}

		top_px(): string {
			return this.top() + 'px'
		}

		left_px(): string {
			return this.left() + 'px'
		}

		drag_end() {
			this.vals_to_sticks()
		}

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
