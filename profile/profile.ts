namespace $ {

	export class $shm_hitalama_profile extends $hyoo_crus_entity.with({

		Tokens: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_token ),
		Groups_lists: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_list ),

		Login: $hyoo_crus_atom_str,
		Pass_key: $hyoo_crus_atom_str,

	}){
		
	}
	
}
