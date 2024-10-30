namespace $ {

	export class $shm_hitalama_profile_key extends $mol_object {

		static key_size() {
			return 144
		}

		@ $mol_action
		static async import( serial: string, password: string ) {

			const pack = $mol_base64_decode( serial )
			const closed = pack.slice( 0, this.key_size() )
			const salt = $mol_crypto_hash( pack.slice( this.key_size() ) ).slice( 0, 16 )
			
			const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( password, salt )
			const opened = await secret.decrypt( closed, salt ).catch( reason => {
				console.warn( reason )
				return null
			} )

			return opened ? $mol_charset_decode( opened ) : null
			
		}
		
		@ $mol_action
		static async export( auth: string, password: string, login: string ) {

			const login_encoded = $mol_charset_encode( login )
			
			const salt = $mol_crypto_hash( login_encoded ).slice( 0, 16 )
			const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( password, salt )
			
			const open = this.$.$mol_charset_encode( auth )
			const closed = new Uint8Array( $mol_wire_sync( secret ).encrypt( open, salt ) )
			
			const pack = new Uint8Array( this.key_size() + login_encoded.byteLength )
			pack.set( closed, 0 )
			pack.set( login_encoded, this.key_size() )
			
			return this.$.$mol_base64_encode( pack )

		}

	}
	
}
