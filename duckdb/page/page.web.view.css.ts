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

		Query_log: {
			background: {
				color: $mol_theme.card,
			},
			flex: {
				direction: 'row',
			},
			lineHeight: '1.15',
			font: {
				size: '12px',
			},
		},

		Query_time: {
			color: $mol_theme.shade,
			padding: $mol_gap.text,
			margin: {
				// left: 'auto',
			},
		},

		Query_head: {
			flex: {
				direction: 'column',
			},
		},

		Logs: {
			width: '30rem',
			flex: {
				grow: 0.5,
			},
			Body_content: {
				gap: $mol_gap.space,
			},
			Tools: {
				justify: {
					content: 'flex-start',
				},
			},
		},

		Logs_clear: {
			margin: {
				left: 'auto',
			},
		},

		Log_sql: {
			flex: {
				shrink: 1,
			},
		},
		
	} )
	
}
