namespace $.$$ {

	export class $shm_hitalama_token_view extends $.$shm_hitalama_token_view {
		
		logo_uri() {
			return super.logo_uri().replace( 'hitalama.github.io', 'hitalama.github.io/hitalama-mol' )
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
