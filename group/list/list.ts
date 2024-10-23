namespace $ {

	export class $shm_hitalama_group_list extends $hyoo_crus_entity.with({

		Name: $hyoo_crus_atom_str,
		Groups: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_group )
		
	}){
		
	}

	
}
