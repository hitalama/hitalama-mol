namespace $.$$ {

	export class $shm_hitalama_lists extends $.$shm_hitalama_lists {
		
		@ $mol_mem
		current_view() {
			return this.$.$mol_state_arg.value( 'create' ) ? this.Creating() : this.Main()
		}
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}
		
	}

}
