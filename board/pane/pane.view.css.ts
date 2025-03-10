namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_pane, {

		'[selecting]': {
			true: {
				userSelect: 'none',
				pointerEvents: 'none',
			},
		},

		Back: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			outline: '1px solid gray'
		},

		Line_vert: {
			position: 'absolute',
			background: {
				color: $mol_theme.line,
			},
			width: '1px',
			height: '9000px',
			top: '-4500px',
		},

		Line_hor: {
			position: 'absolute',
			background: {
				color: $mol_theme.line,
			},
			height: '1px',
			width: '9000px',
			left: '-4500px',
		},

		Content: {
			position: 'absolute',
			transition: 'none',
			
			width: 0,
			height: 0,

			transformOrigin: '0 0',
		},

		Select_rect: {
			position: 'absolute',
			transition: 'none',
			pointerEvents: 'none',
			background: {
				color: $mol_style_func.rgba( 112, 166, 219, 0.1 ),		
			},
			outline: '1px solid #70A6DB'
		},

		position: 'absolute',
		width: '100%',
		height: '100%',
		
	} )
	
}
