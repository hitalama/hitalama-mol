namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_code, {

		background: {
			color: $mol_theme.card,
		},

		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		Textarea: {
			pointerEvents: 'none',
			Edit: {
				pointerEvents: 'auto',
			},
			padding: {
				left: $mol_gap.block,
			},
			margin: $mol_gap.block,
		},

		Run: {
			position: 'absolute',
			bottom: '2rem',
			right: '2rem',	
		},
		
	} )
	
}
