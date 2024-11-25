namespace $.$$ {

	export class $shm_hitalama_board_block_demo extends $.$shm_hitalama_board_block_demo {
		
		content(): string {
			return ''+
				'! height\n  ! ' + this.height() + '\n' + //+ '\n    ! ' + this.height_stick() + '\n' +
				'! width\n  ! ' + this.width() + '\n' + //+ '\n    ! ' + this.width_stick() + '\n' +
				'! top\n  ! ' + this.top() + '\n' + //+ '\n    ! ' + this.top_stick() + '\n' +
				'! left\n  ! ' + this.left() + '\n' + //+ '\n    ! ' + this.left_stick() + '\n' +
				// ''
				'! body_x\n  ! ' + this.body_x() + '\n    ! ' + this.body_x_stick() + '\n' +
				'! right_edge_x\n  ! ' + this.right_edge_x() + '\n    ! ' + this.right_edge_x_stick() + '\n' +
				'! left_edge_x\n  ! ' + this.left_edge_x() + '\n    ! ' + this.left_edge_x_stick() + '\n' +
				'! body_y\n  ! ' + this.body_y() + '\n    ! ' + this.body_y_stick() + '\n' +
				'! bottom_edge_y\n  ! ' + this.bottom_edge_y() + '\n    ! ' + this.bottom_edge_y_stick() + '\n' +
				'! top_edge_y\n  ! ' + this.top_edge_y() + '\n    ! ' + this.top_edge_y_stick() + '\n'
		}
		
	}

}
