namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_demo, {
		
		// box: {
		// 	shadow: [{ inset: false, x: 0, y: 0, blur: 0, spread: '1px', color: $mol_theme.shade, }],
		// },

		userSelect: 'none',

		'[shm_hitalama_board_block_float_selected]': {
			true: {
				outline: '1px solid var(--mol_theme_current)',
			},
		},

		flex: {
			direction: 'column'
		},

		background: {
			color: $mol_theme.back,
		},

		Opacity: {
			flex: {
				grow: 1,
			},
		},

		Cut: {
			color: 'red',
		},

		Head: {
			padding: $mol_gap.space,
		},
		
	} )
	
}
