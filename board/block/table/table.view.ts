namespace $.$$ {

	export class $shm_hitalama_board_block_table extends $.$shm_hitalama_board_block_table {
		
		// @ $mol_mem
		// editing(): boolean {
		// 	return this.input_focused()
		// }

		@ $mol_mem_key
		search_query( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_board_form )
		}

		@ $mol_mem
		query_rows() {
			return this.board().Search_queries()?.remote_list().map( q => this.Row( q.ref() ) ) ?? []
		}

		@ $mol_mem_key
		query( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Query()?.val() || '–'
		}

		@ $mol_mem_key
		excluded_words( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Excluded_words()?.val() || '–'
		}

		@ $mol_mem_key
		prediod( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Date_from()?.val() + ' – ' + this.search_query(ref).Date_to()?.val()
		}

		@ $mol_mem_key
		country( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Country()?.val() || '–'
		}

		@ $mol_mem_key
		language( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Language()?.val() || '–'
		}

		@ $mol_mem_key
		type( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Type()?.val() || '–'
		}

		@ $mol_mem_key
		tags( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Tags()?.val() || '–'
		}

		@ $mol_mem_key
		category( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).Category()?.val() || '–'
		}

		@ $mol_mem_key
		social_media_title( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).File_social_media()?.remote()?.title() || '–'
		}

		@ $mol_mem_key
		mass_media_title( ref: $hyoo_crus_ref ) {
			return this.search_query(ref).File_mass_media()?.remote()?.title() || '–'
		}
		
	}

}
