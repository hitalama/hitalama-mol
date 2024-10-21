namespace $.$$ {

	export class $shm_hitalama_token_view extends $.$shm_hitalama_token_view {
		
		@ $mol_mem
		token_str() {
			return this.token().Token()?.val() || ''
		}

		@ $mol_mem
		user_id() {
			return this.token().User_id()?.val() || ''
		}
		
	}

}
