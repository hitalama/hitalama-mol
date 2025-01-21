namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_page, {

		background: {
			color: 'transparent',
		},

		Head: {
		},

		Head_panel: {
			padding: $mol_gap.block,
			// left: '2rem',
			// top: '1rem',
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: $mol_gap.round,
				// radius: '0.5rem',
			},
			box: {
				shadow: [[ 0, `0.5rem`, `0.5rem`, `-0.5rem`, $mol_style_func.hsla( 0, 0, 0, .25 ) ]],
			},
			position: 'absolute',
			zIndex: $mol_layer.float
		},

		Title: {
			['fieldSizing' as any]: 'content',
			maxWidth: '30rem',
		},

		Settings_content: {
			padding: $mol_gap.block,
		},

		Cut: {
			margin: {
				top: '1rem',
			},
		},

		Pane: {
			overflow: 'hidden',
		},
		
	} )
	
}
