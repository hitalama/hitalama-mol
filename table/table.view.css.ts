namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_table, {

		display: 'block',
		lineHeight: '1.15',

		Head: {
			position: 'sticky',
			top: 0,
			display: 'table-header-group',
			box: {
				shadow: [[ 'inset', 0, '-1px', 0, 0, $mol_theme.line ]],
			},
			background: {
				color: $mol_theme.back,
				image: 'none',
			},
			color: $mol_theme.shade,
			'>': {
				$mol_view: {
					display: 'table-cell',
					padding: {
						bottom: '0.5rem',
						left: '0.5rem',
						right: '0.5rem',
					},
				},
			},
		},

		Body: {
			display: 'table-row-group',
			background: {
				color: $mol_theme.back,
			},
			'>': {
				$mol_view: {
					display: 'table-row',
					':first-child': {
						'>': {
							$mol_view: {
								padding: {
									top: '0.25rem',
								},
							},
						},
					},
					'>': {
						$mol_view: {
							display: 'table-cell',
							padding: {
								top: '0.625rem',
								left: '0.5rem',
								right: '0.5rem',
							},
							verticalAlign: 'middle',
						},
					},
				},
			},
		},

	} )
	
}
