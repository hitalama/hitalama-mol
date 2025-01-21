namespace $ {

	export const $shm_hitalama_board_block_types = [
		'text',
		'input',
		'iframe',
		'form',
		'table',
		'code',
		'chart',
		'chart_settings',
		'chart_filter',
		'customdom',
		'file',
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

		Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),

		Image: $hyoo_crus_file,
		Color: $hyoo_crus_atom_str,
		Font_size: $hyoo_crus_atom_real,

		//iframe
		Src: $hyoo_crus_atom_str,

		//text|code|customdom
		Text: $hyoo_crus_text,
		Use_text_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		//form
		Form: $shm_hitalama_board_form,

		//table|chart
		Table: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_table ),

		//chart
		Chart: $shm_hitalama_board_chart,
		Use_chart_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		//file
		File: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_file ),

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

		@ $mol_mem
		table() {
			return this.Table(null)?.ensure( this.land() )!
		}

		@ $mol_mem
		table_head( next?: any ) {
			return this.table()?.table_head( next )
		}

		@ $mol_mem
		table_rows( next?: any ) {
			return this.table()?.table_rows( next )
		}

		@ $mol_mem
		file_str() {
			return this.File()?.remote()?.File()?.remote()?.str()
		}

	}

}
