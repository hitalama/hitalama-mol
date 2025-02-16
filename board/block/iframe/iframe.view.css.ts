namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_board_block_iframe, {

		background: {
			color: $mol_theme.card,
		},
		
		Blocker: {
			position: 'absolute',
			height: '100%',
			width: '100%',
		},
		
		Drag_view: {
			position: 'static',
			width: 'auto',
			height: 'auto',
			flex: {
				grow: 0,
			},
			padding: $mol_gap.text,
		},

		Title: {
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			display: 'block',
		},

		Tg_post_dom: {
			flex: {
				grow: 1,
			},
		},
		
	} )
	
}
