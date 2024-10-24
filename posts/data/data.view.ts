namespace $.$$ {

	export class $shm_hitalama_posts_data extends $.$shm_hitalama_posts {
		
		@ $mol_mem
		posts_data( next?: any ) {
			return $mol_state_local.value( `${ this }.posts_data()`, next ) || null
		}

		@ $mol_action
		collect() {
			const owner_id = this.owner_id()
			
			$shm_hitalama_jsonp.vk_newFuncWall( 
				{ access_token: this.token_str(), owner_id, offset: '0', count_execute: '0' }, 
				this.posts_data.bind(this) 
			)
		}
		
	}
	
}
