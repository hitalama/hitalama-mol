namespace $.$$ {

	const Textarea = {
		pointerEvents: 'none',
		Edit: {
			pointerEvents: 'auto',
		},
		padding: {
			left: $mol_gap.block,
		},
		margin: {
			left: $mol_gap.block,
			right: $mol_gap.block,
			bottom: $mol_gap.block,
		},
	} as const
	
	$mol_style_define( $shm_hitalama_board_block_customizer, {
		
		background: {
			color: $mol_theme.card,
		},

		Controls: {
			flex: {
				grow: 1,
			},
		},

		Head: {
			margin: {
				top: $mol_gap.space,
				left: $mol_gap.space,
				bottom: $mol_gap.space,
				right: $mol_gap.block,
			},
			gap: $mol_gap.block,
		},

		Name: {
			['fieldSizing' as any]: 'content',
			flex: {
				grow: 0,
			},
		},

		Create: {
			margin: {
				left: 'auto',
			},
		},

		Deck: {
			flex: {
				grow: 1,
			},
			Switch: {
				flex: {
					grow: 0,
				},
			},
		},

		View_tree: {
			...Textarea
		},
		Css: {
			...Textarea
		},
		Js: {
			...Textarea
		},


		// Textarea: {
		// 	pointerEvents: 'none',
		// 	Edit: {
		// 		pointerEvents: 'auto',
		// 	},
		// 	padding: {
		// 		left: $mol_gap.block,
		// 	},
		// 	margin: $mol_gap.block,
		// },
		
	} )
	
}
