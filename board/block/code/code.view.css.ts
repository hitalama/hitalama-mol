namespace $.$$ {

	const Result = {
		position: 'absolute',
		right: 0,
		top: '0.5rem',
		transform: 'translateX(calc(100% + 3rem))',
	} as const
	
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
				Row: {
					Numb: {
						// position: 'sticky',
						// left: 0,
						// pointerEvents: 'auto',
					},
				},
			},
		},

		Overlay: {
			position: 'absolute',
			bottom: '2rem',
			right: '2rem',	
		},

		Result: Result,

		Result_table: {
			... Result,
			top: 0,
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
