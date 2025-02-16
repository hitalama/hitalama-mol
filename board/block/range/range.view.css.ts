namespace $.$$ {

	const Label = {
		width: '4rem',
		padding: $mol_gap.text,
	} as const
	
	$mol_style_define( $shm_hitalama_board_block_range, {
		
		Content: {
			overflow: 'visible',
			contain: 'none',
		},

		Control: {
			justify: {
				content: 'center',
			},
			Input: {
				zIndex: 1,
			},
		},

		Settings_content: {
			padding: $mol_gap.space,
		},

		Min_label: {
			... Label,
		},
		Max_label: {
			... Label,
		},
		Step_label: {
			... Label,
		},
		
	} )
	
}
