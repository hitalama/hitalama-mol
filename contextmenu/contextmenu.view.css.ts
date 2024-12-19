namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_contextmenu, {

		position: 'absolute',
		zIndex: $mol_layer.popup,
		whiteSpace: 'nowrap',
		background: {
			color: $mol_theme.back,
		},
		border: {
			radius: $mol_gap.round,
		},
		outline: 'solid 1px var(--mol_theme_line)',

		transition: 'none',

		Body: {
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: $mol_gap.round,
			},
		},
		
	} )
	
}
