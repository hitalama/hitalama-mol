namespace $ {

	export class $shm_hitalama_project extends $hyoo_crus_entity.with({

		Name: $hyoo_crus_atom_str,
		Files: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_file ),
		Query_logs: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_project_query_log ),

	}){
		
	}

	export class $shm_hitalama_project_query_log extends $hyoo_crus_entity.with({

		Query: $hyoo_crus_atom_str,
		Time: $hyoo_crus_atom_real,

	}){
		
	}

}
