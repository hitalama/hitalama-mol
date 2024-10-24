namespace $.$$ {

	export class $shm_hitalama_analysis extends $.$shm_hitalama_analysis {
		
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
			return this.token_str() ? super.group_body() : [ this.No_auth_message() ]
		}

		@ $mol_mem
		analysis() {
			return this.pending() ? [ this.Loaders() ]
				: this.posts_data() ? super.analysis()  : []
		}

	}

}
