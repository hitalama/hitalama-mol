namespace $.$$ {
	
	$mol_style_define( $shm_hitalama_duckdb_page, {
		
		Query: {
			flex: {
				shrink: 1,
			},
		},

		Duckdb_dump: {
			padding: {
				left: $mol_gap.block,
				top: '2rem',
			},
		},

		Query_page: {
			flex: {
				grow: 1,
			},
		},

		Logs: {
			flex: {
				grow: 0.5,
			},
		},

		Project_label: {
			flex: {
				grow: 1,
			},
		},

		Files_label: {
			flex: {
				grow: 1,
			},
			align: {
				// items: 'flex-start',
				self: 'flex-start',
			},
		},
		
	} )
	
}
