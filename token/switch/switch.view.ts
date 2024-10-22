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

		clear() {
			this.profile()?.Tokens()?.remote_list( [] )
		}

		@ $mol_mem
		current() {
			const id = this.current_ref()
			return id ? this.token( id ) : null
		}

		@ $mol_mem
		current_ref( next?: string ): string {
			return $mol_state_local.value( `${ this }.current_ref()` , next ) || ''
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

		@ $mol_action
		vk_get_user( token: $shm_hitalama_token, token_str: string, user_id: string ){
			const code = 'return API.users.get({"user_ids":"'+ user_id + '","fields":"photo_50"});'
			$shm_hitalama_jsonp.vk_execute( token_str, code, this.vk_user_receive, token )
		}

		@ $mol_action
		vk_user_receive( res: any, token: $shm_hitalama_token ){
			const photo_url = res.response[0].photo_50
			console.log('token', token)
			console.log('photo_url', photo_url)
			token.Avatar_url(null)?.val( photo_url )
		}

		@ $mol_mem
		vk_token_url_parse() {
			const params = new URLSearchParams( this.$.$mol_state_arg.value('access_token') || '' )

			const token_str = params.keys().next().value
			if( !token_str ) return

			const user_id = params.get('user_id')!

			const token = this.profile()?.Tokens(null)?.make( {} )!
			token?.Token(null)?.val( token_str )
			token?.User_id(null)?.val( user_id )

			this.$.$mol_state_arg.value('access_token', null)
			
			this.vk_get_user( token, token_str, user_id )

			return token_str
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
