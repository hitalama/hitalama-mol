namespace $ {
	export class $shm_hitalama_board_transfer_file extends $mol_object {
		
		@ $mol_action
		static serialize( file: $shm_hitalama_file ) {
			const blob_uri = file.$.$mol_wire_sync(file).blob_uri_async()
			return {
				ref: file.ref().description,

				title: file.title(),
				size: file.Size()?.val(),
				blob_uri,
			}
		}

		@ $mol_action
		static deserialize( file: $shm_hitalama_file, dto: ReturnType< typeof $shm_hitalama_board_transfer_file['serialize'] > ) {
			file.title( dto.title )
			file.Size(null)?.val( dto.size )

			const blob = this.$.$mol_wire_sync(this.$.$mol_fetch).blob( dto.blob_uri )
			const f = file.File(null)?.ensure( file.land() )
			f!.blob( blob )
		}
		
	}
}
