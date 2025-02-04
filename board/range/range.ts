namespace $ {
	export class $shm_hitalama_board_range extends $hyoo_crus_entity.with({

		Block: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		Value: $hyoo_crus_atom_real,
		Min: $hyoo_crus_atom_real,
		Max: $hyoo_crus_atom_real,

	}){

		@ $mol_mem
		value( next?: number ) {
			return this.Value(next)?.val(next) ?? 0
		}

		@ $mol_mem
		min( next?: number ) {
			return this.Min(next)?.val(next) ?? 0
		}

		@ $mol_mem
		max( next?: number ) {
			return this.Max(next)?.val(next) ?? 10
		}
		
	}
}
