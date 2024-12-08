namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_pane, {

		// userSelect: 'none',
		'[selecting]': {
			true: {
				userSelect: 'none',
				pointerEvents: 'none',
			},
		},

		Select_rect: {
			position: 'absolute',
			transition: 'none',
			pointerEvents: 'none',
			background: {
				color: $mol_style_func.rgba( 112, 166, 219, 0.1 ),		
			},
			outline: '1px solid #70A6DB'
			// opacity: 0.5,
		},
		
	} )
	
}
