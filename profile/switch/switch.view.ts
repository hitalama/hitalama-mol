namespace $.$$ {

	export class $shm_hitalama_profile_switch extends $.$shm_hitalama_profile_switch {

		login(): string {
			return this.$.$shm_hitalama_profile.current()?.Login()?.val() ?? ''
		}

		sub(): readonly ( any )[] {
			return this.login() ? super.sub() : this.buttons()
		}
		
		@ $mol_action
		exit() {
			this.$.$hyoo_crus_auth.current( this.$.$hyoo_crus_auth.grab() )
		}
	}
	
}
