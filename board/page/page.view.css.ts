namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_page, {

		Back: {
			position: 'absolute',
			height: '9999px',
			width: '9999px',
		},

		Context_menu: {
			position: 'absolute',
			zIndex: $mol_layer.popup,
			whiteSpace: 'nowrap',
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

		Pane: {
			// userSelect: 'none',
			// '[selecting]': [
			// 	'true': {
			// 		userSelect: 'none',
			// 	},
			// ],
		},
		
	} )
	
}
