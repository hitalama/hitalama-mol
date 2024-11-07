namespace $.$$ {
	
	export class $shm_hitalama_entity_page extends $.$shm_hitalama_entity_page {

		@ $mol_mem
		title( next?: string ) {
			return this.entity().title( next ) ?? ''
		}

	}

}
