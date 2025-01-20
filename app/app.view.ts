namespace $.$$ {
	
	export class $shm_hitalama_app extends $.$shm_hitalama_app {

		profiles_ref(){
			return 'Kx9javwY_y7tKaU3n' //'bnsKLjnH_3pDkf98m' 
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
				case 'board':
					return [ this.Board() ]
				case '':
				case 'lists':
				case 'enter':
				case 'register':
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
			return $shm_hitalama_app_ghpages_fix_link( super.logo_uri() )
		}
		
		@ $mol_mem
		profiles() {
			$mol_wire_solid()
			const ref = $hyoo_crus_ref( this.profiles_ref() )
			const profiles = this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_profile_dict )
			return profiles
		}

		@ $mol_mem
		board() {
			const id = this.$.$mol_state_arg.value( 'board' )!
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $shm_hitalama_board )
		}

	}

	export function $shm_hitalama_app_ghpages_fix_link( link: string ) {
		return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
			? '/hitalama-mol' : '' ) + link
	}

}
