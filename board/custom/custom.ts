namespace $ {

	export class $shm_hitalama_board_custom extends $hyoo_crus_entity.with({

		Class_name: $hyoo_crus_atom_str,
		// Class_base: $hyoo_crus_atom_str,
		Code_view_tree: $hyoo_crus_text,
		Code_css: $hyoo_crus_text,
		Code_js: $hyoo_crus_text,

	}) {

		@ $mol_mem
		class_name() {
			return this.Code_view_tree()?.value().split(' ', 1)[0]
		}

	}

}
