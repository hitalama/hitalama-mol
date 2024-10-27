namespace $.$$ {

	export type $shm_hitalama_posts_dto = [
		time: number[],
		id: number[],
		likes: number[],
		reposts: number[],
		comments: number[],
		view: number[]
	]
	
	export class $shm_hitalama_posts extends $.$shm_hitalama_posts {
		
		_posts_data: any = null
		@ $mol_mem
		posts_data( next?: any ) {
			if( next ) {
				this._posts_data = next
				this.pending( false )
			}
			return next ?? this._posts_data
		}

		@ $mol_mem
		dto(): $shm_hitalama_posts_dto | null {
			console.log('this.posts_data()?.response', this.posts_data()?.response)
			return this.posts_data()?.response ?? null
		}
		
		@ $mol_mem_key
		post_id( n: number ) {
			console.log('this.dto()?.[1][n]', this.dto()?.[1][n])
			return String( this.dto()?.[1][n] ) ?? ''
		}
		
		@ $mol_mem_key
		post_date( n: number ) {
			const dto = this.dto()
			return dto ? new $mol_time_moment( dto[0][n]*1000 ).toString('DD.MM.YYYY hh:mm') : '-'
		}
		
		@ $mol_mem_key
		post_likes( n: number ) {
			return String( this.dto()?.[2][n] ?? 0 )
		}
		
		@ $mol_mem_key
		post_reposts( n: number ) {
			return String( this.dto()?.[3][n] ?? 0 )
		}
		
		@ $mol_mem_key
		post_comments( n: number ) {
			return String( this.dto()?.[4][n] ?? 0 )
		}
		
		@ $mol_mem_key
		post_views( n: number ) {
			return String( this.dto()?.[5][n] ?? 0 )
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
