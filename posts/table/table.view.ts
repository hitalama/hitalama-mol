namespace $.$$ {

	export class $shm_hitalama_posts_table extends $.$shm_hitalama_posts_table {
		
		@ $mol_mem
		posts_rows() {
			if( !this.posts_data() ) return []
			console.log('(this.posts_data().response[0] as any[]).map( (p,i)=> i )', (this.posts_data().response[0] as any[]).map( (p,i)=> i ))
			return (this.posts_data().response[0] as any[]).map( (p,i)=>  this.Post_row( i ) )
		}
		
	}
	
}
