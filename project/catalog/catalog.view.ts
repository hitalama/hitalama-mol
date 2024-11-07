namespace $.$$ {
	
	export class $shm_hitalama_project_catalog extends $.$shm_hitalama_project_catalog {

		@ $mol_mem
		list() {
			return $shm_hitalama_profile.current()?.Projects(null)!
		}

	}

}
