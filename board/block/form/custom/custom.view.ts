namespace $.$$ {

	export class $shm_hitalama_board_block_form_custom extends $.$shm_hitalama_board_block_form_custom {
		
		@ $mol_mem
		custom() {
			return this.block().Form_custom()?.remote()!
		}

		field_names() {
			return this.custom().field_names()
		}

		form_fields(): readonly ( any )[] {
			return this.field_names().map( str => this.Field( str ) )
		}

		field_type( id: string ) {
			return this.custom().field_type( id )
		}

		field_name( name: any ): string {
			return name
		}

		Field_content( name: string ) {
			const type = this.field_type( name )
			return this.Content_by_type( name )[ type ]
		}

		@ $mol_mem_key
		field_value( name: any, next?: any ) {
			const type = this.field_type( name )

			if( type == 'file' ) {
				if( next === '' ) {
					this.field_files( name, [] )
					return ''
				}
				const file = this.field_file( name )
				return file?.ref().description
			}

			else if( type == 'period' ) {
				return this.period_str( name, next )
			}

			return next ?? ''
		}

		@ $mol_action
		clear() {
			this.field_names().forEach( name => {
				this.field_value( name, '' )
			} )
		}

		@ $mol_mem_key
		field_file( n: string ) {
			const file_native = this.field_files( n )[0]
			if( !file_native ) return null

			const file = this.board().Files(null)?.make( this.board().land() )
			file?.title( file_native.name )
			file?.Size(null)?.val( file_native.size )
			file?.File(null)?.ensure( this.board().land() )?.blob( file_native )

			return file!
		}

		submit() {
			const obj = Object.fromEntries( this.field_names().map( n => {

				const type = this.field_type( n )

				if( type == 'date' ) {
					const val = this.field_value( n )
					const moment = new $mol_time_moment( val )
					return [ n, val ? moment.toString('DD.MM.YYYY') : '' ]
				}

				return [ n, this.field_value( n ) ]

			} ) )

			this.custom().obj_add( obj )

			this.clear()
		}
		
	}
}
