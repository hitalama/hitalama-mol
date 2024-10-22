namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem
		body() {
			return this.token_str() ? super.body() : this.body_noauth()
		}
		
	}

}
