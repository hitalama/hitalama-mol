namespace $.$$ {
	
	export class $shm_hitalama_project_list extends $.$shm_hitalama_project_list {

		@ $mol_action
		add() {
			const project = $shm_hitalama_profile.current()?.Projects(null)?.make( {'': $hyoo_crus_rank.get} )
			project?.Name(null)?.val( this.name_default() )
			return project
		}

		@ $mol_mem_key
		project( id: string ) {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $shm_hitalama_project )
		}

		@ $mol_mem
		projects() {
			return $shm_hitalama_profile.current()?.Projects()?.remote_list() ?? []
		}

		@ $mol_mem
		spreads() {
			return Object.fromEntries( this.projects().map( p => [
				p.ref().description,
				this.Project_page( p.ref().description ),
			] ) )
		}

	}

}
