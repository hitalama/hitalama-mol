namespace $ {

	export const $shm_hitalama_board_block_types = [
		'text',
		'input',
		'iframe',
		'form',
		'table',
		'code',
	] as const

	class $shm_hitalama_board_block_type extends $hyoo_crus_atom_enum( $shm_hitalama_board_block_types ){}

	export class $shm_hitalama_board_block extends $hyoo_crus_entity.with({

		Body_x: $hyoo_crus_atom_real,
		Body_y: $hyoo_crus_atom_real,
		Bottom_edge_y: $hyoo_crus_atom_real,
		Right_edge_x: $hyoo_crus_atom_real,
		Top_edge_y: $hyoo_crus_atom_real,
		Left_edge_x: $hyoo_crus_atom_real,
		Opacity: $hyoo_crus_atom_real,
		Type: $shm_hitalama_board_block_type,

		Image: $hyoo_crus_file,
		Src: $hyoo_crus_atom_str,
		Text: $hyoo_crus_text,
		Color: $hyoo_crus_atom_str,
		Font_size: $hyoo_crus_atom_real,

		Form: $shm_hitalama_board_form,

	}){

		text( next?: string ) {
			return this.Text(next)?.value(next) ?? ''
		}

		color( next?: string ) {
			return this.Color(next)?.val(next) ?? ''
		}

		font_size( next?: number ) {
			return this.Font_size(next)?.val(next) ?? ''
		}
		
	}

}
