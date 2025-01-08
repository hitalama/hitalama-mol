namespace $ {

	export class $shm_hitalama_board_chart extends $hyoo_crus_entity.with({

		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		Axis: $hyoo_crus_atom_str,
		Axis_details: $hyoo_crus_dict_to( $hyoo_crus_atom_str ), //'day'|'month'|'year' for Date

		Values: $hyoo_crus_atom_jsan,
		Groups: $hyoo_crus_atom_jsan,

		Filters_enabled: $hyoo_crus_atom_jsan,

		Filters_options: $hyoo_crus_dict_to( $hyoo_crus_atom_jsan ),

	}){

		@ $mol_mem
		table() {
			return this.Block()?.remote()?.table()!
		}

		@ $mol_mem
		table_head() {
			return this.table()?.head_extended() ?? []
		}

		@ $mol_mem
		axis( next?: string ){
			return this.Axis(next)?.val( next ) ?? this.table_head()[0]
		}

		@ $mol_mem
		values( next?: ( any )[] ): ( any )[] {
			return this.Values(next)?.val( next ) ?? []
		}

		@ $mol_mem
		values_title( next?: string ) {
			return this.Values(next)?.val( next ? [next] : undefined )?.at(0) ?? this.table_head()[1]
		}

		@ $mol_mem
		groups( next?: ( any )[] ): ( any )[] {
			return this.Groups(next)?.val( next ) ?? []
		}

		// @ $mol_mem
		// filters_enabled( next?: string[] ) {
		// 	return this.Filters_enabled(next)?.val( next ) ?? []
		// }

		// @ $mol_mem_key
		// filter_enabled( field: string ) {
		// 	return this.filters_enabled().includes( field )
		// }

		@ $mol_mem
		rows() {
			const rows = this.table()?.rows_extended() ?? []
			if( rows?.length == 0 ) return [ this.table_head().map( _ => '' ) ]
			return rows
		}

		@ $mol_mem_key
		row_included( [ field, value ]: [ string, any ] ) {
			// const filter_enabled = this.filter_enabled( field )
			// if( !filter_enabled ) return true

			const options = this.Filters_options()?.key( field )?.val()
			if( !options ) return true

			return options.includes( value )
		}

		@ $mol_mem_key
		date_axis_details( axis: string, next?: string ) {
			return this.Axis_details(next)?.key( axis, next )?.val( next ) ?? 'day'
		}
		
		@ $mol_mem
		traversed() {
			const field_options: Map< string/*field*/, Set< string | number > > = new Map
			
			const by_group: Map< string, Map< string, number > > = new Map
			const labels = new Set< string >
			
			const fields = this.table_head()
			const group_indexes =  this.groups().map( g => fields.indexOf( g ) )

			const value_i = fields.indexOf( this.values_title() )
			const row_value = ( row: any[] ) => {
				return row[ value_i ]
			}
			
			const axis_i = fields.indexOf( this.axis() )
			const axis_details = this.date_axis_details( this.axis() )
			const row_label = ( row: any[] ) => {
				if( axis_details ) return dd_mm_yyyy_transform[ axis_details ]( row[ axis_i ] )
				return row[ axis_i ]
			}

			this.rows().forEach( ( row: any[] ) => {
				let included = true

				row.forEach( ( value, i )=> {
					const set = field_options.get( fields[i] ) ?? new Set
					field_options.set( fields[i], set )
					set.add( value )

					included = included == false ? false : this.row_included( [ fields[i], value ] )
				} )

				if( !included ) return

				const group_name = group_indexes.map( i => row[i] ).join(', ') ?? ''
				const by_label = by_group.get( group_name ) ?? new Map
				by_group.set( group_name, by_label )

				const label = row_label( row )
				by_label.set( label, (by_label.get( label ) ?? 0) + Number( row_value( row ) ) )

				labels.add( label )
			} )

			// console.log('{ by_group, labels, field_options }', { by_group, labels, field_options })
			return { by_group, labels, field_options }
		}
		
	}

	const dd_mm_yyyy_transform: Record< string, ( str: string )=> string > = {
		'month': function ( dd_mm_yyyy: string ) {
			const [ day, month, year ] = dd_mm_yyyy.split('.')
			return month + '.' + year
		},
		'year': function ( dd_mm_yyyy: string ) {
			const [ day, month, year ] = dd_mm_yyyy.split('.')
			return year
		},
		'day': function ( dd_mm_yyyy: string ) {
			return dd_mm_yyyy
		},
	}

}
