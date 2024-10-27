namespace $.$$ {

	export class $shm_hitalama_posts_plots_chart extends $.$shm_hitalama_posts_plots_chart {
		
		@ $mol_mem
		groups() {
			return this.group_ids().flatMap( owner_id => this.Group( owner_id ) )
		}
		
	}
	
}
