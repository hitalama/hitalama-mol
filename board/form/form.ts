namespace $ {

	export class $shm_hitalama_board_form extends $hyoo_crus_entity.with({

		Query: $hyoo_crus_atom_str,
		Excluded_words: $hyoo_crus_atom_str,
		Date_from: $hyoo_crus_atom_str,
		Date_to: $hyoo_crus_atom_str,
		Country: $hyoo_crus_atom_str,
		Language: $hyoo_crus_atom_str,

		File_social_media: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_file ),
		File_mass_media: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_file ),

		Type: $hyoo_crus_atom_str,
		Tags: $hyoo_crus_atom_str,
		Category: $hyoo_crus_atom_str,

	}){

		query( next?: string ) {
			return this.Query(next)?.val(next) ?? ''
		}

		excluded_words( next?: string ) {
			return this.Excluded_words(next)?.val(next) ?? ''
		}

		date_from( next?: string ) {
			return this.Date_from(next)?.val(next) ?? ''
		}

		date_to( next?: string ) {
			return this.Date_to(next)?.val(next) ?? ''
		}

		country( next?: string ) {
			return this.Country(next)?.val(next) ?? ''
		}

		language( next?: string ) {
			return this.Language(next)?.val(next) ?? ''
		}

		type( next?: string ) {
			return this.Type(next)?.val(next) ?? ''
		}

		tags( next?: string ) {
			return this.Tags(next)?.val(next) ?? ''
		}

		category( next?: string ) {
			return this.Category(next)?.val(next) ?? ''
		}
		
	}

}
