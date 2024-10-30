namespace $.$$ {

	export class $shm_hitalama_profile_current extends $.$shm_hitalama_profile_current {

		login(): string {
			return this.profile()?.Login()?.val() ?? ''
		}

		sub(): readonly ( any )[] {
			return this.login() ? super.sub() : this.buttons()
		}
		
		profiles() {
			const profiles = this.$.$hyoo_crus_glob.land_grab( $hyoo_crus_rank_public ).Data( this.$.$shm_hitalama_profile_dict )
			// const ref = $hyoo_crus_ref( this.id() )
			// const profiles = this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_profile_dict )
			return profiles
		}

		profile() {
			return this.$.$hyoo_crus_glob!.home().Hall()?.remote()?.cast( $shm_hitalama_profile )!// as $shm_hitalama_profile | null
		}
		
	}
	
}
