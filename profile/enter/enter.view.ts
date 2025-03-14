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
				try {
					this.profiles().key(k)?.remote()?.Pass_key()?.val() 
				} catch (error) {
					console.log( error )
				}
			} )
		}
		
		submit( next?: any ) {
			const profile = this.profiles().key( this.login() )?.remote()

			if( profile?.enter( this.passwond() ) ) {
				this.$.$mol_state_arg.value( 'section', null )
				return
			}

			this.message( this.message_incorrect_pass() )
		}

		@ $mol_mem
		message( next?: string ): string {
			return next ?? ''
		}
		
	}

}
