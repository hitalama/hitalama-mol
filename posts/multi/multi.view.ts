namespace $.$$ {

	export class $shm_hitalama_posts_multi extends $.$shm_hitalama_posts_multi {
		
		@ $mol_mem_key
		post_id( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_id( i )
		}
		
		@ $mol_mem_key
		post_date( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_date( i )
		}
		
		@ $mol_mem_key
		post_likes( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_likes( i )
		}
		
		@ $mol_mem_key
		post_reposts( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_reposts( i )
		}
		
		@ $mol_mem_key
		post_comments( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_comments( i )
		}
		
		@ $mol_mem_key
		post_views( [dto_i, i]: [number, number] ) {
			return this.Posts_by_owner( dto_i ).post_views( i )
		}
		
	}
	
}
