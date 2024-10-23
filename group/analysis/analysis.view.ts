namespace $.$$ {

	export class $shm_hitalama_group_analysis extends $.$shm_hitalama_group_analysis {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem
		group_body() {
			return this.token_str() ? super.group_body() : this.group_body_noauth()
		}
		
	}

}
