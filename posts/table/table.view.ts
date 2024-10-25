namespace $.$$ {

	export class $shm_hitalama_posts_table extends $.$shm_hitalama_posts_table {
		
		@ $mol_mem
		posts_rows() {
			return this.owner_ids().flatMap( owner_id => { 
				const dto = this.dto_by_owner( owner_id )
				return dto?.[0].map( (_: any, i: number)=> this.Post_row( [owner_id, i] ) ) ?? []
			} )
		}
		
		@ $mol_mem_key
		post_id( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_id( i )
		}
		
		@ $mol_mem_key
		post_date( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_date( i )
		}
		
		@ $mol_mem_key
		post_likes( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_likes( i )
		}
		
		@ $mol_mem_key
		post_reposts( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_reposts( i )
		}
		
		@ $mol_mem_key
		post_comments( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_comments( i )
		}
		
		@ $mol_mem_key
		post_views( [dto_i, i]: [number, number] ) {
			return this.Group_posts( dto_i ).post_views( i )
		}
		
	}
	
}
