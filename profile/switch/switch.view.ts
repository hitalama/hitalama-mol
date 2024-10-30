namespace $.$$ {

	export class $shm_hitalama_profile_switch extends $.$shm_hitalama_profile_switch {

		login(): string {
			return this.profile()?.Login()?.val() ?? ''
		}

		sub(): readonly ( any )[] {
			return this.login() ? super.sub() : this.buttons()
		}

		profile() {
			return this.$.$hyoo_crus_glob!.home().Hall()?.remote()?.cast( $shm_hitalama_profile )!
		}

		@ $mol_action
		exit() {
			this.$.$hyoo_crus_auth.current( this.$.$hyoo_crus_auth.grab() )
		}
	}
	
}
