namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_page, {

		Back: {
			position: 'absolute',
			height: '9999px',
			width: '9999px',
		},

		Context_menu_back: {
			position: 'absolute',
			zIndex: $mol_layer.popup,
			whiteSpace: 'nowrap',
			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: $mol_gap.round,
			},
			outline: 'solid 1px var(--mol_theme_line)',
		},

		Context_menu: {
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: $mol_gap.round,
			},
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
