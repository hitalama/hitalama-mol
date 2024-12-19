namespace $ {

	export class $shm_hitalama_board_chart extends $hyoo_crus_entity.with({

		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		Axis: $hyoo_crus_atom_str,
		Values: $hyoo_crus_atom_jsan,
		Groups: $hyoo_crus_atom_jsan,

	}){

		@ $mol_mem
		table() {
			return this.Block()?.remote()?.table()!
		}
		
	}

}
