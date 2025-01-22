namespace $.$$ {

	type Cell_id = { row : number[] , col : number }

	export class $shm_hitalama_board_block_table extends $.$shm_hitalama_board_block_table {
		
		@ $mol_mem
		rows() {
			const rows = this.block().table_rows() ?? []
			if( rows?.length == 0 ) return [ this.head().map( _ => '' ) ]
			return rows.map( (r, i) =>  [ false, i+1, ...r ] )
		}

		@ $mol_mem
		head() {
			return [ '', '', ... this.block().table_head() ?? [] ]
		}

		Cell( id: Cell_id ) : $mol_view {
			if( id.col == 0 ) return this.Cell_checkbox( id )
			if( id.col == 1 ) return this.Cell_index_number( id )
			return this.Cell_text( id )
		}
		
		col_head_content( n: number ) {
			if( n == 0 ) return [ this.All_check() ]
			return [ this.head()?.[  Number( n ) ] ?? '' ]
		}

		@ $mol_mem_key
		cell_index_number( id: Cell_id ) {
			return ( Number( id.row[1]! ) + 1 ).toString()
		}

		@ $mol_mem_key
		cell_checked( id: Cell_id, next?: boolean ) {
			// console.log('id', id)
			const checks = this.block().table().Rows_checked(null)?.val() as Record< number, boolean >
			const row_i = id.row[1]!
			if( next === undefined ) return  checks?.[ row_i ] ?? false

			this.block().table().Rows_checked(null)?.val( { 
				... checks,
				[row_i]: next,
			} )
			return next
		}

		cell_checkboxes() {
			const checkboxes = this.table_row_ids().map( row => this.Checkbox( { col: '0', row } ) )
			console.log('checkboxes', checkboxes)
			return checkboxes
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
			return this.head().slice(2).map( (_, i) => this.Col_width_row( i + 2 ) )
		}

		@ $mol_action
		chart_add() {
			const chart_pos = this.Board_page().contextmenu_real_pos()
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
