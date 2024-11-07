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
		
		content(): string {
			return ''+
				'! height\n  ! ' + this.height() + '\n' + //+ '\n    ! ' + this.height_stick() + '\n' +
				'! width\n  ! ' + this.width() + '\n' + //+ '\n    ! ' + this.width_stick() + '\n' +
				'! top\n  ! ' + this.top() + '\n' + //+ '\n    ! ' + this.top_stick() + '\n' +
				'! left\n  ! ' + this.left() + '\n' + //+ '\n    ! ' + this.left_stick() + '\n' +
				''
				// '! body_x\n  ! ' + this.body_x() + '\n    ! ' + this.body_x_stick() + '\n' +
				// '! right_edge_x\n  ! ' + this.right_edge_x() + '\n    ! ' + this.right_edge_x_stick() + '\n' +
				// '! left_edge_x\n  ! ' + this.left_edge_x() + '\n    ! ' + this.left_edge_x_stick() + '\n' +
				// '! body_y\n  ! ' + this.body_y() + '\n    ! ' + this.body_y_stick() + '\n' +
				// '! bottom_edge_y\n  ! ' + this.bottom_edge_y() + '\n    ! ' + this.bottom_edge_y_stick() + '\n' +
				// '! top_edge_y\n  ! ' + this.top_edge_y() + '\n    ! ' + this.top_edge_y_stick() + '\n'
		}

		opacity_str(): string {
			return this.opacity().toString()
		}
		
	}

}
