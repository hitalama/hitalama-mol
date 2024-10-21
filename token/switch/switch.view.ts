namespace $.$$ {

	export class $shm_hitalama_token_switch extends $.$shm_hitalama_token_switch {

		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		tokens() {
			return this.profile()?.Tokens()?.remote_list() ?? []
		}

		@ $mol_mem
		current() {
			const id = this.current_ref()
			return id ? this.token( id ) : null
		}

		@ $mol_mem_key
		token( ref_str: string ) {
			return this.$.$hyoo_crus_glob!.Node( $hyoo_crus_ref( ref_str ), $shm_hitalama_token )
		}

		@ $mol_mem
		tokens_refs() {
			return this.tokens().map( t => t.ref().description! ) ?? []
		}
		
		@ $mol_mem
		tokens_view() {
			return this.tokens_refs().map( ref => this.Token( ref ) )
		}

		vk_get_user( token: string, user_id: string ){
			const src = 'https://api.vk.com/method/execute?access_token=' + token +
				'&code=return API.users.get({"user_ids":"'+ user_id + '"});&v=5.131&callback=' +
				this.dom_id() + '.vk_user_receive'

			$mol_import.script(src)
		}

		vk_user_receive( res: string ){
			console.log('res', res)
		}

		@ $mol_mem
		vk_token() {
			const params = new URLSearchParams( this.$.$mol_state_arg.value('access_token') || '' )
			console.log('params', params)
			const vk_token = params.keys().next().value
			if( !vk_token ) return

			const user_id = params.get('user_id')!

			const token = this.profile()?.Tokens(null)?.make( {} )
			token?.Token(null)?.val( vk_token )
			token?.User_id(null)?.val( user_id )
			
			this.vk_get_user( vk_token, user_id )

			this.$.$mol_state_arg.value('access_token', null)

			return vk_token
		}

		@ $mol_mem
		vk_user_id() {
			const params = new URLSearchParams( this.$.$mol_state_arg.value('access_token') || '' )
			return params.get('user_id')
		}

		vk_auth_uri(): string {
			return 'https://oauth.vk.com/authorize?client_id=' + this.vk_client_id() +
				'&display=popup&redirect_uri=' + 
				this.vk_redirect_uri() + 
				'&scope=groups,wall,offline&response_type=token&v=5.131'
		}
		
	}

}
