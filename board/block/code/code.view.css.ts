namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_code, {

		background: {
			color: $mol_theme.card,
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
			View: {
				Copy: {
					position: 'absolute',
					left: '-1rem',
				},
			},
		},

		Overlay: {
			position: 'absolute',
			bottom: '2rem',
			right: '2rem',	
		},

		Time: {
			padding: $mol_gap.text,
			opacity: 0.6,
			font: {
				family: 'monospace',
			},
			whiteSpace: 'pre',
		},
		
	} )
	
}
