namespace $.$$ {

	export class $shm_hitalama_board_form_view extends $.$shm_hitalama_board_form_view {
		
		query( next?: string ) {
			return this.form().Query(next)?.val(next) ?? ''
		}

		excluded_words( next?: string ) {
			return this.form().Excluded_words(next)?.val(next) ?? ''
		}

		date_from( next?: string ) {
			const now = new $mol_time_moment
			const shifted = now.shift({ year: -1, day: -now.day! })
			return this.form().Date_from(next)?.val(next) ?? shifted.toString('YYYY-MM-DD')
		}

		date_to( next?: string ) {
			const now = new $mol_time_moment
			return this.form().Date_to(next)?.val(next) ?? now.toString('YYYY-MM-DD')
		}

		country( next?: string ) {
			return this.form().Country(next)?.val(next) ?? ''
		}

		language( next?: string ) {
			return this.form().Language(next)?.val(next) ?? ''
		}

		type( next?: string ) {
			return this.form().Type(next)?.val(next) ?? ''
		}

		tags( next?: string ) {
			return this.form().Tags(next)?.val(next) ?? ''
		}

		category( next?: string ) {
			return this.form().Category(next)?.val(next) ?? ''
		}

		soc_file_test?: File
		social_media_attach( session_id: string, files: File[] ) {
			const file = this.board().Files(null)?.make( this.board().land() )

			this.soc_file_test = files[0]
			file?.title( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( this.board().land() )?.blob( files[0] )

			this.form().File_social_media(null)?.remote( file )
		}

		mass_media_attach( session_id: string, files: File[] ) {
			const file = this.board().Files(null)?.make( this.board().land() )

			file?.title( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( this.board().land() )?.blob( files[0] )

			this.form().File_mass_media(null)?.remote( file )
		}

		social_media_title() {
			return this.form().File_social_media()?.remote()?.title() ?? ''
		}

		mass_media_title() {
			return this.form().File_mass_media()?.remote()?.title() ?? ''
		}
		
		type_select( id: string, event?: MouseEvent ) {
			this.type( id )
			this.focused( true )
		}

		query_bid(): string {
			return this.query() ? '' : '*'
		}

		file_bid(): string {
			return this.social_media_title() || this.mass_media_title() ? '' : '*'
		}

		submit() {
			const form = this.board().Search_statistics(null)?.make( this.board().land() )

			form?.query( this.query() )
			form?.excluded_words( this.excluded_words() )
			form?.date_from( this.date_from() )
			form?.date_to( this.date_to() )
			form?.country( this.country() )
			form?.language( this.language() )
			form?.type( this.type() )
			form?.tags( this.tags() )
			form?.category( this.category() )
			form?.File_mass_media(null)?.remote( this.form().File_mass_media()?.remote() )
			form?.File_social_media(null)?.remote( this.form().File_social_media()?.remote() )

			this.clear()
		}

		clear() {
			const form = this.form()
			form.query( '' )
			form.excluded_words( '' )
			this.session_id( $mol_guid() )
			form?.File_mass_media(null)?.remote( null )
			form?.File_social_media(null)?.remote( null )
		}

		social_media_field() {
			return [this.Social_media_field( this.session_id() )]
		}

		mass_media_field() {
			return [this.Mass_media_field( this.session_id() )]
		}
		
	}
	
}
