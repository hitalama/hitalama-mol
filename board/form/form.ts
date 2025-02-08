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

		/** @deprecated Use period */
		prediod() {
			const from = this.Date_from()?.val()
			const to = this.Date_to()?.val()
			return (from && to) ? from + ' – ' + to : ''
		}

		period() {
			const from = this.Date_from()?.val()
			const to = this.Date_to()?.val()
			return (from && to) ? from + ' – ' + to : ''
		}

		social_media_title() {
			return this.File_social_media()?.remote()?.title() || ''
		}

		mass_media_title() {
			return this.File_mass_media()?.remote()?.title() || ''
		}

		@ $mol_mem
		table_row() {
			return [
				this.query(),
				this.excluded_words(),
				this.period(),
				this.country(),
				this.language(),
				this.File_social_media()?.remote()?.ref()?.description,
				this.File_mass_media()?.remote()?.ref()?.description,
				this.type(),
				this.tags(),
				this.category(),
				null,
			]
		}

		@ $mol_mem
		statistic_table_rows() {
			const rows: any[] = []
			this.File_mass_media()?.remote()?.File()?.remote()?.str()?.split('\n')?.forEach( line => {
				const [ date, count ] = line.split(';')
				if( isNaN( Number( count ) ) ) return
				rows.push( [ date, count, this.query(), this.excluded_words(), 'СМИ', this.country(), this.language() ] )
			} )
			
			this.File_social_media()?.remote()?.File()?.remote()?.str()?.split('\n')?.forEach( line => {
				const [ date, count ] = line.split(';')
				if( isNaN( Number( count ) ) ) return
				rows.push( [ date, count, this.query(), this.excluded_words(), 'Соц.медиа', this.country(), this.language() ] )
			} )
			return rows
		}
		
		@ $mol_action
		serialize() {
			return {
				ref: this.ref().description,

				query: this.Query()?.val(),
				excluded_words: this.Excluded_words()?.val(),
				date_from: this.Date_from()?.val(),
				date_to: this.Date_to()?.val(),
				country: this.Country()?.val(),
				language: this.Language()?.val(),
				type: this.Type()?.val(),
				tags: this.Tags()?.val(),
				category: this.Category()?.val(),

				file_social_media_ref: this.File_social_media()?.remote()?.ref().description,
				file_mass_media_ref: this.File_mass_media()?.remote()?.ref().description,
			}
		}

		@ $mol_action
		deserialize_data( dto: ReturnType< $shm_hitalama_board_form['serialize'] > ) {
			this.Query( dto.query )?.val( dto.query )
			this.Excluded_words( dto.excluded_words )?.val( dto.excluded_words )
			this.Date_from( dto.date_from )?.val( dto.date_from )
			this.Date_to( dto.date_to )?.val( dto.date_to )
			this.Country( dto.country )?.val( dto.country )
			this.Language( dto.language )?.val( dto.language )
			this.Type( dto.type )?.val( dto.type )
			this.Tags( dto.tags )?.val( dto.tags )
			this.Category( dto.category )?.val( dto.category )
		}

		@ $mol_action
		deserialize_refs( dto: ReturnType< $shm_hitalama_board_form['serialize'] >, ref_remap: Map< string, string > ) {
			if( dto.file_mass_media_ref ) {
				const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.file_mass_media_ref )! ), $shm_hitalama_file )
				this.File_mass_media(null)?.remote( file )
			}
			if( dto.file_social_media_ref ) {
				const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.file_social_media_ref )! ), $shm_hitalama_file )
				this.File_social_media(null)?.remote( file )
			}
		}
		
	}

}
