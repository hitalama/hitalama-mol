namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_dashboard_block_text, {
		
		userSelect: 'none',

		'[shm_hitalama_dashboard_block_float_selected]': {
			true: {
				outline: '1px solid var(--mol_theme_current)',
			},
		},

		flex: {
			direction: 'column'
		},

		// background: {
		// 	color: $mol_theme.back,
		// },

		Blocker: {
			position: 'absolute',
			height: '100%',
			width: '100%',
		},

		Text: {
			position: 'absolute',
			height: '100%',
			width: '100%',
			background: {
				color: 'transparent',
			},
			$mol_string: {
				background: {
					color: 'transparent',
				},
				boxShadow: 'none',
			},
			// Edit: {
			// 	background: {
			// 		color: 'transparent',
			// 	},
			// },
		},

	} )
	
}
