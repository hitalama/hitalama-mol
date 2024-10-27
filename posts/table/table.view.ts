namespace $.$$ {

	export class $shm_hitalama_posts_table extends $.$shm_hitalama_posts_table {

		@ $mol_mem
		posts_rows() {
			console.log('this.owner_ids()', this.owner_ids())
			return this.owner_ids().flatMap( owner_id => { 
				const dto = this.dto_by_owner( owner_id )
				console.log('dto', dto)
				return dto?.[0].map( (_: any, i: number)=> this.Post_row( [owner_id, i] ) ) ?? []
			} )
		}
		
	}
	
}
