namespace $ {

	export class $shm_hitalama_board_table extends $hyoo_crus_entity.with({

		/** @deprecated Use Board (since table-block is one-to-many) */
		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),
		
		Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),

		Form_custom: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_form_custom ),

		Head: $hyoo_crus_atom_jsan,
		Head_method: $hyoo_crus_atom_str,

		Rows: $hyoo_crus_atom_jsan,
		Rows_method: $hyoo_crus_atom_str,

		Col_widths: $hyoo_crus_atom_jsan, 
		/**
		 * 'date'|'any'|'file'.
		 * 'file' is a ref_str to shm_hitalama_file
		 */
		Col_types: $hyoo_crus_atom_jsan,

		Rows_checked: $hyoo_crus_atom_json, //[i]: bool

	}){

		@ $mol_mem
		board() {
			return this.Board()?.remote() ?? this.Block()?.remote()?.board()!
		}

		@ $mol_mem
		form_custom() {
			return this.Form_custom()?.remote()
		}

		@ $mol_mem
		table_head( next?: any ): any[] {
			const custom = this.form_custom()
			if( custom ) return custom.field_names()

			const method = this.Head_method()?.val()
			if( !method ) return this.Head(next)?.val( next ) ?? []

			return this.board().execute( method, { next, table: this } )
		}
		
		@ $mol_mem
		table_rows( next?: any ): any[] {
			const custom = this.form_custom()
			if( custom ) {
				const head = this.table_head()
				return custom.objects().map( obj => {
					return head.map( n => obj[n] )
				} ) ?? []
			}

			const method = this.Rows_method()?.val()
			if( !method ) return this.Rows(next)?.val( next ) ?? []

			const table = this
			return this.board().execute( method, { next, table } )
		}

		@ $mol_mem
		objects( next?: any[] ) {
			const custom = this.form_custom()
			if( custom ) return custom.objects()

			if( next ) {
				const keys = new Map< string, number >
				const rows: any[][] = []

				next.forEach( obj => {
					const row: any[] = []
					rows.push( row )
					for( const key in obj ) {
						const index = keys.get( key ) ?? keys.size
						keys.set( key, index )
						row[ index ] = obj[ key ]
					}
				} )
				
				this.table_head( [ ...keys.keys() ] )
				this.table_rows( rows )
				return next
			}

			const head = this.table_head()
			const rows = this.table_rows()
			return rows.map( r => Object.fromEntries( head.map( (h, i)=> [ h, r[i] ] ) ) )
		}

		@ $mol_mem
		col_types( next?: any ) {
			const custom = this.form_custom()
			if( custom ) return custom.fields_parsed().arr.map( f => f.type )
			
			const types_raw = this.Col_types(next)?.val(next) ?? []

			const types = [...types_raw] 

			this.table_head()?.forEach( (title, i) => {
				if( title == 'Дата' ) { types[i] ??= 'date' }
				types[i] ??= 'any'
			} )

			return types
		}

		@ $mol_mem
		head_computeds(): { title: string, calc: ( row: any[] )=> any }[] {
			return []
			// const head = this.table_head()!
			// const date_cols = this.col_types().flatMap( (type, i)=> type == 'date' ? [i] : [] )
			// return date_cols.flatMap( col_i => {
			// 	const title = head[ col_i ]
			// 	return [
			// 		{
			// 			title: `${title} (месяц)`,
			// 			calc: ( row: any[] )=> {
			// 				const dd_mm_yyyy = row[ col_i ]
			// 				const [ day, month, year ] = dd_mm_yyyy.split('.')
			// 				return month + '.' + year
			// 			},
			// 		},
			// 		{
			// 			title: `${title} (год)`,
			// 			calc: ( row: any[] )=> {
			// 				const dd_mm_yyyy = row[ col_i ]
			// 				const [ day, month, year ] = dd_mm_yyyy.split('.')
			// 				return year
			// 			},
			// 		},
			// 	]
			// } )
		}

		@ $mol_mem
		head_extended() {
			return [ ...this.table_head() ?? [], ...this.head_computeds().map( h => h.title ) ]
		}

		@ $mol_mem
		rows_extended() {
			const head_calculated = this.head_computeds()
			const rows = this.table_rows()
			return rows?.map( ( row: any ) => {
				const calculated = head_calculated.map( ({ title, calc })=> {
					return calc( row )
				} )
				return [ ...row, ...calculated ]
			} )
		}

	}

}
