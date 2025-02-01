namespace $.$$ {

	const Head_panel = {
		padding: $mol_gap.block,
		background: {
			color: $mol_theme.card,
		},
		border: {
			radius: $mol_gap.round,
		},
		box: {
			shadow: [[ 0, `0.5rem`, `0.5rem`, `-0.5rem`, $mol_style_func.hsla( 0, 0, 0, .25 ) ]] as any,
		},
		position: 'absolute',
		zIndex: $mol_layer.float
	} as const
	
	$mol_style_define( $shm_hitalama_board_page, {

		background: {
			color: 'transparent',
		},

		Head: {
		},

		Head_panel: {
			...Head_panel,
		},
		Head_right_panel: {
			...Head_panel,
			right: 0,
		},

		Title: {
			['fieldSizing' as any]: 'content',
			maxWidth: '30rem',
		},

		Settings_content: {
			padding: $mol_gap.block,
		},

		Description_field: {
			padding: {
				bottom: $mol_gap.block,
			},
		},

		// Cut: {
		// 	margin: {
		// 		top: '1rem',
		// 	},
		// },

		Pane: {
			overflow: 'hidden',
		},
		
	} )
	
}
