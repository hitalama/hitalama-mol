namespace $.$$ {

	export class $shm_hitalama_profile_register extends $.$shm_hitalama_profile_register {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob!.home().Hall(null)?.ensure( { '': $hyoo_crus_rank.get } )?.cast( $shm_hitalama_profile )!
		}
		
		submit( next?: any ) {
			const profile = this.profiles().key( this.login(), 'auto' )?.remote( this.profile() )
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
