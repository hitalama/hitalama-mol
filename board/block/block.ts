namespace $ {

	export const $shm_hitalama_board_block_types = [
		'text',
		'input',
		'iframe',
		'form',
		'table',
		'table_novirt',
		'code',
		'chart',
		'chart_settings',
		'chart_filter',
		'customdom',
		'file',
		'range',
		'form_edit',
		'code_css',
		'customizer',
		'custom',
		'form_custom',
		'code_sql',
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
		Type_custom: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_custom ),

		Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),

		Image: $hyoo_crus_file,
		Color: $hyoo_crus_atom_str,
		Font_size: $hyoo_crus_atom_real,

		Data: $hyoo_crus_atom_json,

		/** text|code|customdom */
		Text: $hyoo_crus_text,
		Use_text_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		/** code_sql */
		Subtext: $hyoo_crus_text,

		/** code_css */
		Enabled: $hyoo_crus_atom_bool,

		/** range */
		Range: $shm_hitalama_board_range,

		/** form */
		Form: $shm_hitalama_board_form,
		/** form_edit */
		Form_edit: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_form ),

		/** table|chart */
		Table: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_table ),

		/** chart */
		Chart: $shm_hitalama_board_chart,
		Use_chart_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		/** file */
		File: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_file ),

		/** customizer, or custom type */
		Custom: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_custom ),

	}){

		@ $mol_mem
		view( next?: $mol_view ) {
			return next
		}

		@ $mol_mem
		css_id() {
			$mol_wire_solid()
			return CSS.escape( this.view()?.dom_id()! )
		}

		text( next?: string ) {
			return this.Text(next)?.value(next) ?? ''
		}

		subtext( next?: string ) {
			return this.Subtext(next)?.value(next) ?? ''
		}
		data( next?: any ) {
			return this.Data(next)?.val(next)
		}

		color( next?: string ) {
			return this.Color(next)?.val(next) ?? ''
		}

		font_size( next?: number ) {
			return this.Font_size(next)?.val(next) ?? ''
		}

		type() {
			return this.Type()?.val() ?? ''
		}

		@ $mol_mem
		range() {
			return this.Range(null)!
		}
		
		@ $mol_mem
		preprocessed( page?: $shm_hitalama_board_page, view?: $mol_view ) {
			const text = this.text()
			const board = this.Board()?.remote()!
			return board.execute( 'return `'+text+'`', { page, this_block: this, view } )
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
		table_col_types( next?: any ) {
			return this.table()?.col_types( next )
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
