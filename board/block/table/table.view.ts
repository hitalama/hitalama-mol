namespace $.$$ {

	export class $shm_hitalama_board_block_table extends $.$shm_hitalama_board_block_table {
		
		@ $mol_mem
		rows() {
			const rows = this.block().table_rows() ?? []
			if( rows?.length == 0 ) return [ this.head().map( _ => '' ) ]
			return rows
		}

		@ $mol_mem
		head() {
			return this.block().table_head() ?? []
		}
		
		col_head_content( id : string ) {
			return [ this.head()?.[  Number( id ) ] ?? '' ]
		}

		@ $mol_mem_key
		col_width_px( id: any ) {
			const width = Number( this.col_width( id.col ) )
			return isNaN( width ) ? 'auto' : width + 'px'
		}

		@ $mol_mem_key
		col_width( col: number, next?: number ) {
			const widths = this.block().table()?.Col_widths()?.val()
			if( next === undefined ) return widths?.[col] ?? NaN

			const widths_next = [ ... widths??[] ]
			widths_next[col] = next
			this.block().table()?.Col_widths(null)?.val( widths_next )

			return next ?? NaN
		}

		@ $mol_mem
		col_width_rows() {
			return this.head().map( (_, i) => this.Col_width_row( i ) )
		}

		@ $mol_action
		chart_add() {
			const chart_pos = this.Board_page().contextmenu_pos()
			const chart_block = this.board().block_add( 'chart', chart_pos, 600, 400 )
			chart_block?.Table(null)?.remote( this.block().table() )
			const chart = chart_block?.Chart(null)
			chart?.Block(null)?.remote( chart_block )

			const settings = this.board().block_add( 'chart_settings', [ chart_pos[0] + 600, chart_pos[1] ], 180, 290 )
			settings?.Use_chart_from(null)?.remote( chart_block )

			this.Board_page().contextmenu_showed( false )
		}
		
	}

}
