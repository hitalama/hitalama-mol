namespace $.$$ {

	const Top_edge = {
		top: '-5px',
		height: '10px',
	} as const

	const Left_edge = {
		left: '-5px',
		width: '10px',
	} as const

	const Right_edge = {
		right: '-5px',
		width: '10px',
	} as const

	const Bottom_edge = {
		bottom: '-5px',
		height: '10px',
	} as const
	
	$mol_style_define( $shm_hitalama_resize, {

		position: 'absolute',
		transition: 'none',

		// backgroundColor: 'color-mix(in srgb, var(--mol_theme_line) 50%, transparent)',

		Fullsize_wrapper: {
			position: 'relative',
			height: 'auto',
			width: 'auto',
		},
		
		Drag_view: {
			flex: {
				grow: 1,
			},
		},
		
		Top_edge: {
			cursor: 'ns-resize',
			left: 0,
			... Top_edge,
			width: '100%',
		},
		
		Top_left_edge: {
			cursor: 'nwse-resize',
			... Top_edge,
			... Left_edge,
		},
		
		Top_right_edge: {
			cursor: 'nesw-resize',
			... Top_edge,
			... Right_edge,
		},
		
		Left_edge: {
			cursor: 'ew-resize',
			... Left_edge,
			height: '100%',
		},

		Bottom_edge: {
			cursor: 'ns-resize',
			... Bottom_edge,
			width: '100%',
		},
		
		Bottom_left_edge: {
			cursor: 'nesw-resize',
			... Bottom_edge,
			... Left_edge,
		},
		
		Bottom_right_edge: {
			cursor: 'nwse-resize',
			... Bottom_edge,
			... Right_edge,
		},
		
		Right_edge: {
			cursor: 'ew-resize',
			... Right_edge,
			height: '100%',
		},
		
	} )
	
	$mol_style_define( $shm_hitalama_resize_edge, {
		
		position: 'absolute',
		zIndex: $mol_layer.float,
		userSelect: 'none',

		opacity: 0.1,
		
		":hover": {
			background: {
				color: $mol_theme.shade,
			},
		},
		'[shm_hitalama_dragged]': {
			'true': {
				background: {
					color: $mol_theme.line,
				},
				":hover": {
					background: {
						color: $mol_theme.line,
					},
				},
			},
		},
		
	} )
	
}