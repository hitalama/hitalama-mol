namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {

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

	}

}
