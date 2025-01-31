namespace $ {

	export class $shm_hitalama_board_table extends $hyoo_crus_entity.with({

		/** @deprecated Use Board */
		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),
		
		Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),

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
			return this.Board()?.remote() ?? this.Block()?.remote()?.Board()?.remote()!
		}

		@ $mol_mem
		table_head( next?: any ): any[] {
			const method = this.Head_method()?.val()
			if( !method ) return this.Head(next)?.val( next ) ?? []

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.board() } )
			return res
		}
		
		@ $mol_mem
		table_rows( next?: any ): any[] {
			const method = this.Rows_method()?.val()
			if( !method ) return this.Rows(next)?.val( next ) ?? []

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.board() } )
			return res
		}

		@ $mol_mem
		col_types( next?: any ) {
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

		@ $mol_action
		serialize() {
			return {
				ref: this.ref().description,

				head: this.Head()?.val(),
				head_method: this.Head_method()?.val(),
				rows: this.Rows()?.val(),
				rows_method: this.Rows_method()?.val(),
				col_widths: this.Col_widths()?.val(),
				col_types: this.Col_types()?.val(),
				rows_checked: this.Rows_checked()?.val(),
			}
		}

		@ $mol_action
		deserialize( dto: ReturnType< $shm_hitalama_board_table['serialize'] > ) {
			this.Head( dto.head )?.val( dto.head )
			this.Head_method( dto.head_method )?.val( dto.head_method )
			this.Rows( dto.rows )?.val( dto.rows )
			this.Rows_method( dto.rows_method )?.val( dto.rows_method )
			this.Col_widths( dto.col_widths )?.val( dto.col_widths )
			this.Col_types( dto.col_types )?.val( dto.col_types )
			this.Rows_checked( dto.rows_checked )?.val( dto.rows_checked )
		}

	}

}
