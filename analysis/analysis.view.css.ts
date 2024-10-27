namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_analysis, {

		Body_content: {
			transition: 'none',
			gap: $mol_gap.block,
		},

		Collect_block: {
			flex: {
				direction: 'column',
			},
			width: '30rem',
		},

		Collect: {
			margin: {
				left: 'auto',
			},
			align: {
				self: 'flex-start',
			},
		},

		Summary_label: {
			Label: {
				padding: $mol_gap.text,
			},
			Content: {
				padding: 0,
			},
		},
		Summary: {
			padding: $mol_gap.text,
			flex: {
				grow: 1,
			},
		},

		List: {
			padding: $mol_gap.text,
		},

		List_collect: {
			margin: {
				left: 'auto',
			},
		},

		List_select: {
			margin: {
				top: '-0.5rem',
				bottom: '-0.5rem',
			},
			Trigger: {
				padding: {
					left: '0.5rem',
					right: '0.5rem',
				},
			},
		},

		Posts_table: {
			padding: $mol_gap.text,
		},

		Search: {
			flex: {
				direction: 'column',
				// basis: '30rem',
			},
		},
		
	} )
	
}
