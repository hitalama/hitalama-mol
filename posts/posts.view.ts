namespace $.$$ {

	export type $shm_hitalama_posts_dto = [
		time: number[],
		id: string[],
		likes: string[],
		reposts: string[],
		comments: string[],
		view: string[]
	]
	
	export class $shm_hitalama_posts extends $.$shm_hitalama_posts {
		
		@ $mol_mem
		posts_data( next?: any ) {
			if( next ) this.pending( false )
				
			return next ?? null
			// return $mol_state_local.value( `${ this }.posts_data()`, next ) || null
		}

		dto(): $shm_hitalama_posts_dto | undefined {
			return this.posts_data().response
		}
		
		@ $mol_mem_key
		post_id( n: number ) {
			return this.dto()?.[1][n] ?? ''
		}
		
		@ $mol_mem_key
		post_date( n: number ) {
			return new $mol_time_moment( this.dto()![0][n]*1000 ).toString('DD.MM.YYYY hh:mm')
		}
		
		@ $mol_mem_key
		post_likes( n: number ) {
			return this.dto()?.[2][n] ?? ''
		}
		
		@ $mol_mem_key
		post_reposts( n: number ) {
			return this.dto()?.[3][n] ?? ''
		}
		
		@ $mol_mem_key
		post_comments( n: number ) {
			return this.dto()?.[4][n] ?? ''
		}
		
		@ $mol_mem_key
		post_views( n: number ) {
			return this.dto()?.[5][n] ?? ''
		}

		@ $mol_action
		collect() {
			this.pending( true )
			const owner_id = this.owner_id()
			
			$shm_hitalama_jsonp.vk_newFuncWall( 
				{ access_token: this.token_str(), owner_id, offset: '0', count_execute: '0' }, 
				this.posts_data.bind(this) 
			)
		}
		
	}
	
}
