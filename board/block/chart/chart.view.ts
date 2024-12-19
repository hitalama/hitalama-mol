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
			return this.block().Chart(next)?.Axis(next)?.val( next ) ?? this.head()[0]
		}

		values( next?: ( any )[] ): ( any )[] {
			return this.block().Chart(next)?.Values(next)?.val( next ) ?? []
		}

		values_title( next?: string ){
			return this.block().Chart(next)?.Values(next)?.val( next ? [next] : undefined )?.at(0) ?? this.head()[1]
		}

		groups( next?: ( any )[] ): ( any )[] {
			return this.block().Chart(next)?.Groups(next)?.val( next ) ?? []
		}

		names(): string[] {
			return [ ...this.traversed().by_group.keys() ]
		}

		@ $mol_mem_key
		series_y( group_name: any ): readonly ( any )[] {
			const labels = this.labels()

			const by_label = this.traversed().by_group.get( group_name )

			return labels.map( l => Number( by_label?.get( l ) ) )
		}

		labels(): readonly ( string )[] {
			return [...this.traversed().labels]
		}

		@ $mol_mem
		traversed() {
			const by_group: Map< string, Map< string, number > > = new Map
			const labels = new Set< string >

			const group_indexes =  this.groups().map( g => this.head().indexOf( g ) )
			// const value_i = this.head().indexOf( this.values()[0] )
			const value_i = this.head().indexOf( this.values_title() )
			const axis_i = this.head().indexOf( this.axis() )

			this.rows().forEach( r => {
				const group_name = group_indexes.map( i => r[i] ).join(', ') ?? ''

				const by_label = by_group.get( group_name ) ?? new Map
				by_group.set( group_name, by_label )

				const label = r[ axis_i ]
				by_label.set( label, (by_label.get( label ) ?? 0) + Number( r[ value_i ] ) )

				labels.add( label )
			} )

			return { by_group, labels }
		}
		
	}

}
