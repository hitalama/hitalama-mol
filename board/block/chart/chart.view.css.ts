namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_chart, {

		background: {
			color: $mol_theme.card,
		},

		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		Sidebar: {
			boxShadow: '0 0 1rem hsla(0,0%,0%,.5)',
			border: {
				radius: $mol_gap.round,
			},
			zIndex: $mol_layer.popup,
			background: {
				color: $mol_theme.back,
			},
		},

		Form: {
			background: {
				color: $mol_theme.card,
			},
			padding: $mol_gap.block,
		},

		// Table: {
		// 	padding: $mol_gap.block,
		// 	overflowX: 'inherit',
		// },
		
	} )
	
}
