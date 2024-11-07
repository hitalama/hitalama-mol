namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_resize, {

		position: 'absolute',
		transition: 'none',
		backgroundColor: 'color-mix(in srgb, var(--mol_theme_line) 50%, transparent)',
		// margin: '5px',

		Body: {
			width: '100%',
			height: '100%',
		},
		
		Top_edge: {
			cursor: 'ns-resize',
			left: 0,
			top: '-5px',
			width: '100%',
			height: '10px',
		},
		
		Top_left_edge: {
			cursor: 'nwse-resize',
			left: '-5px',
			top: '-5px',
			width: '10px',
			height: '10px',
		},
		
		Top_right_edge: {
			cursor: 'nesw-resize',
			right: '-5px',
			top: '-5px',
			width: '10px',
			height: '10px',
		},
		
		Left_edge: {
			cursor: 'ew-resize',
			left: '-5px',
			height: '100%',
			width: '10px',
		},

		Bottom_edge: {
			cursor: 'ns-resize',
			bottom: '-5px',
			width: '100%',
			height: '10px',
		},
		
		Bottom_left_edge: {
			cursor: 'nesw-resize',
			left: '-5px',
			bottom: '-5px',
			width: '10px',
			height: '10px',
		},
		
		Bottom_right_edge: {
			cursor: 'nwse-resize',
			right: '-5px',
			bottom: '-5px',
			width: '10px',
			height: '10px',
		},
		
		Right_edge: {
			cursor: 'ew-resize',
			right: '-5px',
			height: '100%',
			width: '10px',
		},
		
	} )
	
	$mol_style_define( $shm_hitalama_resize_edge, {
		
		position: 'absolute',
		zIndex: $mol_layer.float,
		userSelect: 'none',

		opacity: 0.1,
		background: {
			// color: 'red',
		},
		
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
