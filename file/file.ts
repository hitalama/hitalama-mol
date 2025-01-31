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
		
		@ $mol_action
		serialize() {
			const blob_uri = this.$.$mol_wire_sync(this).blob_uri_async()
			return {
				ref: this.ref().description,

				title: this.title(),
				size: this.Size()?.val(),
				blob_uri,
			}
		}

		@ $mol_action
		deserialize( dto: ReturnType< $shm_hitalama_file['serialize'] > ) {
			this.title( dto.title )
			this.Size(null)?.val( dto.size )

			const blob = this.$.$mol_wire_sync(this.$.$mol_fetch).blob( dto.blob_uri )
			const file = this.File(null)?.ensure( this.land() )
			file?.blob( blob )
		}
		
	}

}
