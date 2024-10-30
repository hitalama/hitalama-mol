namespace $.$$ {

	export class $shm_hitalama_profile_enter extends $.$shm_hitalama_profile_enter {

		@ $mol_mem
		login( next?: string ): string {
			this.message('')
			return next ?? ''
		}

		@ $mol_mem
		passwond( next?: string ): string {
			this.message('')
			return next ?? ''
		}
		
		@ $mol_mem
		pull_pass_keys( ) {
			this.profiles()?.keys().forEach( k => {
				this.profiles().key(k)?.remote()?.Pass_key()?.val() 
			} )
		}
		
		submit( next?: any ) {
			const profile = this.profiles().key( this.login() )?.remote()

			if( profile?.enter( this.passwond() ) ) {
				this.$.$mol_state_arg.value( 'section', 'profile' )
				return
			}

			this.message( this.message_incorrect_pass() )
		}
		
	}

}
