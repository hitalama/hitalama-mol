namespace $.$$ {

	export class $shm_hitalama_board_block_chart extends $.$shm_hitalama_board_block_chart {
		
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

		axis( next?: string ){
			return this.block().Chart(next)?.Axis(next)?.val( next ) ?? ''
		}

		values( next?: ( any )[] ): ( any )[] {
			return this.block().Chart(next)?.Values(next)?.val( next ) ?? []
		}

		groups( next?: ( any )[] ): ( any )[] {
			return this.block().Chart(next)?.Groups(next)?.val( next ) ?? []
		}

		names(): readonly ( any )[] {
			const rows = this.rows()
			return [ rows[0][4] ]
		}

		@ $mol_mem_key
		series_y( id: any ): readonly ( any )[] {
			const rows = this.rows()
			return rows.map( r => Number( r[1] ) )
			// return [1,1,1].map( i => i * Math.random() )
		}

		labels(): readonly ( string )[] {
			const rows = this.rows()
			return rows.map( r => r[0] )
		}
		
	}

}
