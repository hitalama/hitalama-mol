namespace $ {

	export class $shm_hitalama_board_presence extends $hyoo_crus_entity.with({
		Profile: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_profile ),
		Pos: $hyoo_crus_atom_jsan,
		Time: $hyoo_crus_atom_int,
	}){}

	export class $shm_hitalama_board_presence_dict extends $hyoo_crus_dict_to( 
		$hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_presence )
	) {}

}
