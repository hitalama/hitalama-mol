namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {

		logo_uri() {
			return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
				? '/hitalama-mol' : '' ) + super.logo_uri()
		}

	}

}
