namespace $ {

	export class $shm_hitalama_board_table extends $hyoo_crus_entity.with({

		Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),

		Head: $hyoo_crus_atom_jsan,
		Head_method: $hyoo_crus_atom_str,

		Rows: $hyoo_crus_atom_jsan,
		Rows_method: $hyoo_crus_atom_str,

		Col_widths: $hyoo_crus_atom_jsan,

	}){

		@ $mol_mem
		table_head( next?: any ) {
			const method = this.Head_method()?.val()
			if( !method ) return this.Head(next)?.val( next )

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.Board()?.remote() } )

			return this.Head(res)?.val( res )
		}
		
		@ $mol_mem
		table_rows( next?: any ) {
			const method = this.Rows_method()?.val()
			if( !method ) return this.Rows(next)?.val( next )

			const vars = 'const next = this.next;const board = this.board;\n'
			const func = new Function( vars + method )

			const res = func.call( { next, board: this.Board()?.remote() } )

			return this.Rows(res)?.val( res )
		}
		
	}

}
