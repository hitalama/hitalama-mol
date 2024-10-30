namespace $.$$ {

	export class $shm_hitalama_profile_register extends $.$shm_hitalama_profile_register {
		
		submit( next?: any ) {
			const profile = this.profiles().key( this.login(), 'auto' )?.remote( this.$.$shm_hitalama_profile.current() )
			profile?.Login(null)!.val( this.login() )
			profile?.password( this.passwond() )

			if( profile ) {
				const home = this.$.$hyoo_crus_glob!.home()
				home.Hall(null)!.remote( profile )
				this.$.$mol_state_arg.value( 'section', 'profile' )
			}

		}
		
	}

}
