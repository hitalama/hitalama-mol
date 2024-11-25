namespace $.$$ {
	
	export class $shm_hitalama_board_catalog extends $.$shm_hitalama_board_catalog {

		@ $mol_mem
		list() {
			return $shm_hitalama_profile.current()?.boards(null)!
		}

	}

}
