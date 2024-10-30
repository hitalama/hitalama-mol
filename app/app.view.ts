namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {

		static profiles_ref = 'Æmeosfa4_3wKh4sDz'

		Spread_current() {
			const spread = this.spread()
			if( spread == 'enter' ) return this.Enter()
			if( spread == 'register' ) return this.Register()
			return this.Spread( spread )
		}

		logo_uri() {
			return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
				? '/hitalama-mol' : '' ) + super.logo_uri()
		}
		
		@ $mol_mem
		profiles() {
			$mol_wire_solid()
			const ref = $hyoo_crus_ref( this.$.$shm_hitalama_app.profiles_ref )
			const profiles = this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_profile_dict )
			return profiles
		}

	}

}
