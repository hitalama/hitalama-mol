namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_table, {

		background: {
			color: $mol_theme.card,
			// color: $mol_theme.back,
		},
		
		// Head: {
		// 	padding: $mol_gap.space,
		// },

		// Title: {
		// 	align: {
		// 		items: 'center',
		// 	},
		// },

		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			// overflow: 'scroll',
		},

		Table: {
			padding: $mol_gap.block,
			background: {
				color: 'transparent',
			},
			Head: {
				background: {
					color: $mol_theme.back,
				},
				$mol_view: {
					background: {
						color: $mol_theme.card,
					},
				},
			},
		},
		
	} )
	
}
