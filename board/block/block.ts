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

		/** iframe */
		Src: $hyoo_crus_atom_str,

		/** text|code|customdom */
		Text: $hyoo_crus_text,
		Use_text_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		/** form */
		Form: $shm_hitalama_board_form,

		/** table|chart */
		Table: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_table ),

		/** chart */
		Chart: $shm_hitalama_board_chart,
		Use_chart_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),

		/** file */
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

		@ $mol_action
		serialize() {
			return {
				ref: this.ref().description,

				title: this.title(),
				
				body_x: this.Body_x()?.val(),
				body_y: this.Body_y()?.val(),
				bottom_edge_y: this.Bottom_edge_y()?.val(),
				right_edge_x: this.Right_edge_x()?.val(),
				top_edge_y: this.Top_edge_y()?.val(),
				left_edge_x: this.Left_edge_x()?.val(),
				opacity: this.Opacity()?.val(),
				type: this.Type()?.val(),
		
				// Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),
		
				// Image: $hyoo_crus_file,
				color: this.Color()?.val(),
				font_size: this.Font_size()?.val(),

				/** iframe */
				src: this.Src()?.val(),

				/** text|code|customdom */
				text: this.Text()?.value(),
				
				use_text_from_ref: this.Use_text_from()?.remote()?.ref().description,

				/** table|chart */
				table_ref: this.Table()?.remote()?.ref().description,

				/** chart */
				chart: this.Chart()?.serialize(),
				use_chart_from_ref: this.Use_chart_from()?.remote()?.ref().description,

				/** file */
				file_ref: this.File()?.remote()?.ref().description,
			}
		}

		@ $mol_action
		deserialize_data( dto: ReturnType< $shm_hitalama_board_block['serialize'] > ) {
			this.title( dto.title )
			this.Body_x( dto.body_x )?.val( dto.body_x )
			this.Body_y( dto.body_y )?.val( dto.body_y )
			this.Bottom_edge_y( dto.bottom_edge_y )?.val( dto.bottom_edge_y )
			this.Right_edge_x( dto.right_edge_x )?.val( dto.right_edge_x )
			this.Top_edge_y( dto.top_edge_y )?.val( dto.top_edge_y )
			this.Left_edge_x( dto.left_edge_x )?.val( dto.left_edge_x )
			this.Opacity( dto.opacity )?.val( dto.opacity )
			this.Type( dto.type )?.val( dto.type! )
			this.Color( dto.color )?.val( dto.color )
			this.Font_size( dto.font_size )?.val( dto.font_size )
			this.Src( dto.src )?.val( dto.src )
			this.Text( dto.text )?.value( dto.text )

			if( dto.chart ) {
				const chart = this.Chart(null)
				chart?.Block(null)?.remote( this )
				chart?.deserialize( dto.chart )
			}
		}

		@ $mol_action
		deserialize_refs( dto: ReturnType< $shm_hitalama_board_block['serialize'] >, ref_remap: Map< string, string > ) {
			if( dto.use_chart_from_ref ) {
				// console.log('dto.use_chart_from_ref', dto.use_chart_from_ref)
				// console.log('ref_remap.get( dto.use_chart_from_ref )', ref_remap.get( dto.use_chart_from_ref ))
				const block = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.use_chart_from_ref )! ), $shm_hitalama_board_block )
				// console.log('block', block)
				this.Use_chart_from(null)?.remote( block )
			}
			if( dto.use_text_from_ref ) {
				const block = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.use_text_from_ref )! ), $shm_hitalama_board_block )
				this.Use_text_from(null)?.remote( block )
			}
			if( dto.table_ref ) {
				const table = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.table_ref )! ), $shm_hitalama_board_table )
				this.Table(null)?.remote( table )
			}
			if( dto.file_ref ) {
				const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap.get( dto.file_ref )! ), $shm_hitalama_file )
				this.File(null)?.remote( file )
			}
		}

	}

}
