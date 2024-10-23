namespace $.$$ {

	export class $shm_hitalama_posts extends $.$shm_hitalama_posts {
		
		@ $mol_mem
		posts_data( next?: any ) {
			return $mol_state_local.value( `${ this }.posts_data()`, next ) || null
		}
		
		@ $mol_mem_key
		post_id( n: number ) {
			return this.posts_data().response[1][n] ?? ''
		}
		
		@ $mol_mem_key
		post_date( n: number ) {
			return new $mol_time_moment( this.posts_data().response[0][n]*1000 ).toString('DD.MM.YYYY hh:mm')
		}
		
		@ $mol_mem_key
		post_likes( n: number ) {
			return this.posts_data().response[2][n] ?? ''
		}
		
		@ $mol_mem_key
		post_reposts( n: number ) {
			return this.posts_data().response[3][n] ?? ''
		}
		
		@ $mol_mem_key
		post_comments( n: number ) {
			return this.posts_data().response[4][n] ?? ''
		}
		
		@ $mol_mem_key
		post_views( n: number ) {
			return this.posts_data().response[5][n] ?? ''
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
