namespace $.$$ {

	export class $shm_hitalama_profile_register extends $.$shm_hitalama_profile_register {
		
		submit( next?: any ) {
			const profile = this.profiles().key( this.login(), 'auto' )?.remote( this.$.$shm_hitalama_profile.current() )
			profile?.Login(null)!.val( this.login() )
			profile?.password( this.passwond() )

			if( profile ) {
				const home = this.$.$hyoo_crus_glob!.home()
				home.Hall(null)!.remote( profile )
				this.$.$mol_state_arg.value( 'section', null )
				// this.$.$mol_state_arg.value( 'section', 'profile' )
			}

		}

		@ $mol_mem
		account_exist() {
			return this.profiles().has( this.login() )
		}

		@ $mol_mem
		submit_enabled() {
			if( this.login() == '' ) return false
			return this.message() ? false : true
		}

		@ $mol_mem
		message( next?: string ): string {
			return this.account_exist() 
				? this.account_exist_message().replace( '{login}', this.login() ) 
				: next ?? ''
		}
		
	}

}
