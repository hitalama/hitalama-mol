namespace $.$$ {

	type Cell_id = { row : number[] , col : number }

	export class $shm_hitalama_board_block_table extends $.$shm_hitalama_board_block_table {
		
		@ $mol_mem
		rows() {
			const rows = this.block().table_rows() ?? []
			return rows.map( (r, i) =>  [ false, i+1, ...r, null ] )
		}

		@ $mol_mem
		head() {
			return [ '', '', ... this.block().table_head() ?? [], '' ]
		}

		@ $mol_mem
		col_types() {
			return [ 'check', 'index', ... this.block().table_col_types() ?? [], 'action_delete' ]
		}

		Cell( id: Cell_id ) : $mol_view {
			if( id.col == 0 ) return this.Cell_checkbox( id )
			if( id.col == 1 ) return this.Cell_index_number( id )

			const col_type = this.col_types()?.[id.col]
			if( col_type == 'file' ) return this.Cell_file( id )
			if( col_type == 'action_delete' ) return this.Cell_delete( id )

			return this.Cell_text( id )
		}

		col_ids() {
			return this.head().map( (_,i) => i )
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
		cell_file_name( id: Cell_id ) {
			const ref_str = this.cell_content_text( id ).toString()
			const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_str ), $shm_hitalama_file )
			return file.title()
		}

		@ $mol_mem_key
		cell_file_visible( id: Cell_id ) {
			const ref_str = this.cell_content_text( id ).toString()
			return ref_str ? super.cell_file_visible( id ) : []
		}

		@ $mol_mem_key
		file_uri_async( ref_str: string ) {
			const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_str ), $shm_hitalama_file )
			const blob = file.File()?.remote()?.blob()!
			return this.$.$mol_blob_uri( blob )
		}

		@ $mol_action
		file_uri( ref_str: string ) {
			return this.$.$mol_wire_sync(this).file_uri_async( ref_str )
		}

		@ $mol_mem_key
		cell_file_uri( id: Cell_id ) {
			const ref_str = this.cell_content_text( id ).toString()
			const uri = this.file_uri( ref_str )
			return uri
		}

		@ $mol_mem_key
		cell_checked( id: Cell_id, next?: boolean ) {
			const checks = this.block().table().Rows_checked(null)?.val() as Record< number, boolean >
			const row_i = id.row[1]!
			if( next === undefined ) return  checks?.[ row_i ] ?? false

			this.block().table().Rows_checked(null)?.val( { 
				... checks,
				[row_i]: next,
			} )
			return next
		}

		@ $mol_action
		cell_delete( id: Cell_id ) {
			const row_i = id.row[1]!
			this.board().search_statistics_cut( row_i )

			const rows_checked = this.block().table().Rows_checked()?.val() as Record< number, boolean > ?? {}
			const rows_checked_next: Record< number, boolean > = {}

			for (const key in rows_checked) {
				let n = Number(key)
				const bool = rows_checked[n]
				if( n > row_i ) n--
				rows_checked_next[n] = bool
			}

			this.block().table().Rows_checked()?.val(rows_checked_next)
		}

		cell_checkboxes() {
			const checkboxes = this.table_row_ids().map( row => this.Checkbox( { col: '0', row } ) )
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
