namespace $.$$ {

	export class $shm_hitalama_token_view extends $.$shm_hitalama_token_view {
		
		logo_uri() {
			return ( $.$mol_dom_context.document?.location.host == 'hitalama.github.io'
				? '/hitalama-mol' : '' ) + super.logo_uri()
		}
		
		@ $mol_mem
		token_str() {
			return this.token().Token()?.val() || ''
		}

		@ $mol_mem
		user_id() {
			return this.token().User_id()?.val() || ''
		}

		// @ $mol_mem
		// logo_uri() {
		// 	// return '
		// }

		@ $mol_mem
		avatar_url() {
			return this.token().Avatar_url()?.val() || ''
		}
		
	}

}
