namespace $.$$ {
	
	export class $shm_hitalama_dashboard_catalog extends $.$shm_hitalama_dashboard_catalog {

		@ $mol_mem
		list() {
			return $shm_hitalama_profile.current()?.Dashboards(null)!
		}

	}

}
