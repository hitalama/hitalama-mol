namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_table, {

		background: {
			color: $mol_theme.card,
		},

		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		Table: {
			padding: $mol_gap.block,
			overflowX: 'inherit',
		},

		Cell_text: {
			whiteSpace: 'normal',
		},

		Cell_checkbox: {
			padding: 0,
		},

		Cell_file: {
			padding: 0,
		},
		Download: {
			whiteSpace: 'normal',
		},

		All_check: {
			margin: {
				top: '-0.5rem',
				bottom: '-0.5rem',
				left: '-0.75rem',
				right: '-0.75rem',
			},
		},

		Col_width_title: {
			flex: {
				grow: 1,
			},
			align: {
				items: 'center',
			},
			padding: $mol_gap.text,
		},

		Col_widths_head: {
			justify: {
				content: 'flex-end'
			},
			padding: $mol_gap.text,
		},
		
	} )
	
}
