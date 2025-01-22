namespace $ {

	export class $shm_hitalama_board_table extends $hyoo_crus_entity.with({

		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		Head: $hyoo_crus_atom_jsan,
		Head_method: $hyoo_crus_atom_str,

		Rows: $hyoo_crus_atom_jsan,
		Rows_method: $hyoo_crus_atom_str,

		Col_widths: $hyoo_crus_atom_jsan, //date, any
		Col_types: $hyoo_crus_atom_jsan,

		Rows_checked: $hyoo_crus_atom_json, //[i]: bool

	}){

		@ $mol_mem
		board() {
			return this.Block()?.remote()?.Board()?.remote()!
		}

		@ $mol_mem
		table_head( next?: any ) {
			const method = this.Head_method()?.val()
			if( !method ) return this.Head(next)?.val( next )

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.board() } )

			return this.Head(res)?.val( res )
		}
		
		@ $mol_mem
		table_rows( next?: any ) {
			const method = this.Rows_method()?.val()
			if( !method ) return this.Rows(next)?.val( next )

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.board() } )

			return this.Rows(res)?.val( res )
		}

		@ $mol_mem
		col_types() {
			return this.Col_types()?.val() ?? this.table_head()?.map( title => title == 'Дата' ? 'date' : 'any' ) ?? []
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
