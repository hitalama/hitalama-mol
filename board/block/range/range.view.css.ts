namespace $.$$ {

	const Label = {
		width: '4rem',
		padding: $mol_gap.text,
	} as const
	
	$mol_style_define( $shm_hitalama_board_block_range, {
		
		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
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
