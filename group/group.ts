namespace $ {

	export type $shm_hitalama_group_dto = { 
		id: string,
		name: string,
		photo_50: string,
		members_count: number 
	}

	export class $shm_hitalama_group extends $hyoo_crus_entity.with({

		Name: $hyoo_crus_atom_str,
		Group_id: $hyoo_crus_atom_str,
		Owner_id: $hyoo_crus_atom_str,
		Photo_url: $hyoo_crus_atom_str,
		Members_count: $hyoo_crus_atom_real,
		
	}){

		fill( dto: $shm_hitalama_group_dto ) {
			this.Name(null)?.val( dto?.name )
			this.Group_id(null)?.val( dto?.id )
			this.Owner_id(null)?.val( '-' + dto?.id )
			this.Photo_url(null)?.val( dto?.photo_50 )
			this.Members_count(null)?.val( dto?.members_count )
		}
		
	}
	
}
