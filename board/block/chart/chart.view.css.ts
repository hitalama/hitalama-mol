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
			outline: 'solid 1px var(--mol_theme_line)',
			// boxShadow: '0 0 1rem hsla(0,0%,0%,.5)',
			border: {
				radius: $mol_gap.round,
			},
			background: {
				color: $mol_theme.back,
			},
			flex: {
				direction: 'column',
			},
		},

		Form: {
			background: {
				color: $mol_theme.card,
			},
			padding: $mol_gap.block,
			gap: $mol_gap.space,
		},

		Filters: {
			background: {
				color: $mol_theme.card,
			},
			padding: $mol_gap.block,
			box: {
				shadow: [
					{ inset: false, x: 0, y: '-1px', blur: 0, spread: 0, color: $mol_theme.line, },
				],
			},
			gap: $mol_gap.space,
		},

		// Table: {
		// 	padding: $mol_gap.block,
		// 	overflowX: 'inherit',
		// },
		
	} )
	
}
