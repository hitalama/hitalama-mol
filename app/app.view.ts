namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {

		Spread_current() {
			return this.Spread( this.spread() )
		}

		logo_uri() {
			return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
				? '/hitalama-mol' : '' ) + super.logo_uri()
		}

	}

}
