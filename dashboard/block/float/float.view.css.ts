namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_dashboard_block_float, {
		
		// box: {
		// 	shadow: [{ inset: false, x: 0, y: 0, blur: 0, spread: '1px', color: $mol_theme.shade, }],
		// },

		userSelect: 'none',

		'[shm_hitalama_dashboard_block_float_selected]': {
			true: {
				outline: '1px solid var(--mol_theme_current)',
			},
		},

		Drag: {
			":hover": {
				outline: '1px solid var(--mol_theme_line)',
			},
			'[shm_hitalama_dragged]': {
				true: {
					outline: '1px solid var(--mol_theme_control)',
					":hover": {
						outline: '1px solid var(--mol_theme_control)',
					},
				},
			},
		},

		flex: {
			direction: 'column'
		},

		// background: {
		// 	color: $mol_theme.back,
		// },
		
	} )
	
}
