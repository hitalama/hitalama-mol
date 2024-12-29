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

		values_title( next?: string ) {
			return this.block().Chart(next)?.Values(next)?.val( next ? [next] : undefined )?.at(0) ?? this.head()[1]
		}

		groups( next?: ( any )[] ): ( any )[] {
			return this.block().Chart(next)?.Groups(next)?.val( next ) ?? []
		}

		names(): string[] {
			return [ ...this.traversed().by_group.keys() ]
		}

		@ $mol_mem
		filters_enabled( next?: string[] ) {
			return this.block().Chart(next)?.Filters_enabled(next)?.val( next ) ?? []
		}

		@ $mol_mem
		filters() {
			const enabled = this.block().Chart()?.Filters_enabled()?.val() ?? []
			return enabled.map( t => this.Filter_content( t ) )
		}

		filter_title( id: any ): string {
			return id
		}

		@ $mol_mem_key
		filter_options( id: any ): readonly ( any )[] {
			return [ ... this.traversed().field_options.get( id ) ?? [] ]
		}

		@ $mol_mem_key
		filter_options_checked( id: string, next?: string[] ) {
			return this.block().Chart()?.Filters_options(next)?.key( id, next )?.val( next ) ?? this.filter_options( id )
		}

		@ $mol_mem_key
		row_included( { field, value }: { field: string, value: any } ) {
			const filter_enabled = this.filter_enabled( field )
			if( !filter_enabled ) return true

			const options = this.block().Chart()?.Filters_options()?.key( field )?.val()
			if( !options ) return true

			return options.includes( value )
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
			const field_options: Map< string/*field*/, Set< string | number > > = new Map
			
			const by_group: Map< string, Map< string, number > > = new Map
			const labels = new Set< string >
			
			const fields = this.head()
			const group_indexes =  this.groups().map( g => fields.indexOf( g ) )
			const value_i = fields.indexOf( this.values_title() )
			const axis_i = fields.indexOf( this.axis() )

			this.rows().forEach( ( row: any[] ) => {
				let included = true

				row.forEach( ( value, i )=> {
					const set = field_options.get( fields[i] ) ?? new Set
					field_options.set( fields[i], set )
					set.add( value )

					included = included == false ? false : this.row_included( { field: fields[i], value } )
				} )

				if( !included ) return

				const group_name = group_indexes.map( i => row[i] ).join(', ') ?? ''

				const by_label = by_group.get( group_name ) ?? new Map
				by_group.set( group_name, by_label )

				const label = row[ axis_i ]
				by_label.set( label, (by_label.get( label ) ?? 0) + Number( row[ value_i ] ) )

				labels.add( label )
			} )

			return { by_group, labels, field_options }
		}
		
	}

}
