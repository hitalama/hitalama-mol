namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_text, {
		
		userSelect: 'none',

		'[shm_hitalama_board_block_float_selected]': {
			true: {
				outline: '1px solid var(--mol_theme_current)',
			},
		},

		flex: {
			direction: 'column'
		},

		Blocker: {
			position: 'absolute',
			height: '100%',
			width: '100%',
		},

		Image: {
			position: 'absolute',
			width: '100%',
			transition: 'none',
			pointerEvents: 'none',
		},

		Text: {
			position: 'absolute',
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
			lineHeight: '1.5',
			['View' as '$mol_view']: {
				['Row' as '$mol_view']: {
					':empty': {
						height: '1.5em',
					},
					['Token' as '$mol_view']: {
						color: 'inherit',
					},
				},
			},
		},

		Font_size: {
			width: '4rem',
		},
		Font_size_tool: {
			flex: 'none',
			alignSelf: 'auto',
		},
		Inc_dec: {
			flex: {
				direction: 'column',
			},
		},
		Inc: {
			padding: {
				top: 0,
				bottom: 0,
				left: $mol_gap.space,
				right: $mol_gap.block,
			},
		},
		Dec: {
			padding: {
				top: 0,
				bottom: 0,
				left: $mol_gap.space,
				right: $mol_gap.block,
			},
		},

	} )
	
}
