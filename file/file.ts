namespace $ {

	export class $shm_hitalama_file extends $hyoo_crus_entity.with({

		Size: $hyoo_crus_atom_real,

		File: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_file ),

	}){

		async blob_uri_async() {
			const blob = this.File()?.remote()?.blob()!
			const uri = await $mol_blob_uri( blob )
			return uri
		}
		
	}

}
