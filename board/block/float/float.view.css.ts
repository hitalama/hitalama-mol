namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_float, {
		
		// box: {
		// 	shadow: [{ inset: false, x: 0, y: 0, blur: 0, spread: '1px', color: $mol_theme.shade, }],
		// },

		userSelect: 'none',


		":hover": {
			outline: '1px solid var(--mol_theme_line)',
		},

		'[shm_hitalama_board_block_float_selected]': {
			true: {
				outline: '1px solid var(--mol_theme_current)',
				":hover": {
					outline: '1px solid var(--mol_theme_current)',
				},
			},
		},

		'[shm_hitalama_board_block_float_dragged]': {
			true: {
				outline: '1px solid var(--mol_theme_control)',
				":hover": {
					outline: '1px solid var(--mol_theme_control)',
				},
			},
		},

		Toolbar: {
			position: 'absolute',
			top: 0,
			width: '100%',
			// transform: 'translateY(-100%)',
			transformOrigin: '0 100%',
			transition: 'none',
			overflow: 'visible',
			zIndex: $mol_layer.popup,
			padding: {
				bottom: $mol_gap.space,
			},
			pointerEvents: 'none',
			['$mol_view']: {
				pointerEvents: 'auto',
			}
		},

		Sidebar: {
			position: 'absolute',
			top: 0,
			right: '-5px',
			transform: 'translateX(100%)',
			overflow: 'visible',
			// zIndex: $mol_layer.popup,
			pointerEvents: 'none',
			['$mol_view']: {
				pointerEvents: 'auto',
			}
		},

		Drag_view: {
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		flex: {
			direction: 'column'
		},

		Delete: {
			margin: {
				left: $mol_gap.block,
			},
			color: '#ff6666',
		},

		Customize: {
			boxShadow: '0 -1px 0 0 var(--mol_theme_line)',
		},

		// background: {
		// 	color: $mol_theme.back,
		// },
		
	} )
	
}
