namespace $.$$ {

	export class $shm_hitalama_token_switch extends $.$shm_hitalama_token_switch {

		@ $mol_mem
		vk_redirect_uri() {
			const { origin, pathname } = $.$mol_dom_context.document?.location
			return origin + pathname
		}

		@ $mol_mem
		tokens() {
			return this.$.$shm_hitalama_profile.current()?.Tokens()?.remote_list() ?? []
		}

		clear() {
			this.current_ref('')
			this.$.$shm_hitalama_profile.current()?.Tokens()?.remote_list( [] )
		}

		@ $mol_mem
		current() {
			const id = this.current_ref()
			return id ? this.token( id ) : null
		}

		@ $mol_mem
		current_ref( next?: string ): string {
			if( next === undefined ) {
				const tokens = this.tokens()
				const ref = $mol_state_local.value<string>( `${ this }.current_ref()`)!
				return tokens.find( t => t.ref().description == ref ) ? ref : ''
			}
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
			token.Avatar_url(null)?.val( photo_url )
		}

		@ $mol_mem
		vk_token_url_parse() {
			const params = new URLSearchParams( this.$.$mol_state_arg.value('access_token') || '' )

			const token_str = params.keys().next().value
			if( !token_str ) return

			const user_id = params.get('user_id')!

			const token = this.$.$shm_hitalama_profile.current()?.Tokens(null)?.make( {} )!
			token?.Token(null)?.val( token_str )
			token?.User_id(null)?.val( user_id )

			this.$.$mol_state_arg.value('access_token', null)
			
			this.vk_get_user( token, token_str, user_id )

			this.current_ref( token.ref().description )

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
