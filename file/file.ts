namespace $ {

	export class $shm_hitalama_file extends $hyoo_crus_entity.with({

		Name: $hyoo_crus_atom_str,
		Size: $hyoo_crus_atom_real,

		File: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_file ),

	}){
		
	}

}
