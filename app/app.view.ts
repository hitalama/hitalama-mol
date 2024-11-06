namespace $.$$ {
	
	export class $shm_hitalama_app extends $.$shm_hitalama_app {

		profiles_ref(){
			return 'Æmeosfa4_3wKh4sDz'
		}

		Spread_current() {
			const spread = this.spread()
			if( spread == 'enter' ) return this.Enter()
			if( spread == 'register' ) return this.Register()
			return this.Spread( spread )
		}

		@ $mol_mem
		pages() {
			// switch( this.spread() ) {
			// 	case '':
			// 		return super.pages()
			// 	case 'lists':
			// 		return super.pages()
			// }
			if( this.spread() != 'projects' ) return super.pages()

			const spread = this.spread() === '' ? this.Spread_default() : this.Spread(this.spread())
			return [
				this.Menu(),
				... spread
					? spread instanceof $mol_book2
						? spread.pages()
						: [ spread ]
					: [],
			]
		}

		logo_uri() {
			return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
				? '/hitalama-mol' : '' ) + super.logo_uri()
		}
		
		@ $mol_mem
		profiles() {
			$mol_wire_solid()
			const ref = $hyoo_crus_ref( this.profiles_ref() )
			const profiles = this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_profile_dict )
			return profiles
		}

		attach_new( files: File[] ) {
			const file = $shm_hitalama_profile.current()?.Files(null)?.make( {'': $hyoo_crus_rank.get} )
			file?.blob( files[0] )
			return files
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $hyoo_crus_file )
		}

		@ $mol_mem_key
		file_name( ref: $hyoo_crus_ref ) {
			return this.file( ref )?.name() ?? ''
		}

		@ $mol_mem
		files() {
			return $shm_hitalama_profile.current()?.Files()?.remote_list().map( f => this.File( f.ref() ) ) ?? []
		}

		@ $mol_mem
		files_clear() {
			this.$.$shm_hitalama_profile.current()?.Files()?.remote_list( [] )
		}

	}

}
