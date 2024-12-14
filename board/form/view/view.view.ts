namespace $.$$ {

	export class $shm_hitalama_board_form_view extends $.$shm_hitalama_board_form_view {
		
		query( next?: string ) {
			return this.form().Query(next)?.val(next) ?? ''
		}

		excluded_words( next?: string ) {
			return this.form().Excluded_words(next)?.val(next) ?? ''
		}

		date_from( next?: string ) {
			return this.form().Date_from(next)?.val(next) ?? ''
		}

		date_to( next?: string ) {
			return this.form().Date_to(next)?.val(next) ?? ''
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

		social_media_attach( files: File[] ) {
			const file = this.board().Files(null)?.make( {'': $hyoo_crus_rank.get} )

			file?.title( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( {'':$hyoo_crus_rank.get} )?.blob( files[0] )

			this.form().File_social_media(null)?.remote( file )

			return files
		}

		mass_media_attach( files: File[] ) {
			const file = this.board().Files(null)?.make( {'': $hyoo_crus_rank.get} )

			file?.title( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( {'':$hyoo_crus_rank.get} )?.blob( files[0] )

			this.form().File_mass_media(null)?.remote( file )

			return files
		}

		social_media_title() {
			return this.form().File_social_media()?.remote()?.title() ?? ''
		}

		mass_media_title() {
			return this.form().File_mass_media()?.remote()?.title() ?? ''
		}

		submit() {
			const form = this.board().Search_statistics(null)?.make( {'': $hyoo_crus_rank.get} )

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
			form?.File_mass_media(null)?.remote( null )
			form?.File_social_media(null)?.remote( null )
		}
		
	}
	
}
