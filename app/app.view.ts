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
			switch( this.spread() ) {
				case '':
				case 'lists':
					return super.pages()
			}
			// if( this.spread() != 'projects' ) return super.pages()

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

	}

}
