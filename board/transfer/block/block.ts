namespace $ {
	export class $shm_hitalama_board_transfer_block extends $mol_object {
		
		static async image_blob_uri_async( block: $shm_hitalama_board_block ) {
			const blob = block.Image()?.blob()
			if( !blob ) return
			const uri = await $mol_blob_uri( blob )
			return uri
		}

		@ $mol_action
		static serialize( block: $shm_hitalama_board_block ) {
			const image_blob_uri = this.$.$mol_wire_sync(this).image_blob_uri_async( block )
			const chart = block.Chart()

			const range = block.range() ? {
				value: block.range().value(),
				min: block.range().min(),
				max: block.range().max(),
				step: block.range().step(),
			} : undefined

			return {
				ref: block.ref().description,

				title: block.title(),
				
				body_x: block.Body_x()?.val(),
				body_y: block.Body_y()?.val(),
				bottom_edge_y: block.Bottom_edge_y()?.val(),
				right_edge_x: block.Right_edge_x()?.val(),
				top_edge_y: block.Top_edge_y()?.val(),
				left_edge_x: block.Left_edge_x()?.val(),
				opacity: block.Opacity()?.val(),
				type: block.Type()?.val(),

				type_custom: block.Type_custom()?.remote()?.ref().description,
		
				/** customizer */
				custom: block.Custom()?.remote()?.ref().description,

				// Board: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board ),
		
				image_blob_uri,
				color: block.Color()?.val(),
				font_size: block.Font_size()?.val(),

				/** text|code|customdom */
				text: block.Text()?.value(),

				enabled: block.Enabled()?.val(),

				/** range */
				range,
				
				use_text_from_ref: block.Use_text_from()?.remote()?.ref().description,
				
				/** form_edit */
				form_edit_ref: block.Form_edit()?.remote()?.ref().description,

				/** table|chart */
				table_ref: block.Table()?.remote()?.ref().description,

				/** chart */
				chart: chart ? $shm_hitalama_board_transfer_chart.serialize( chart ) : undefined,
				use_chart_from_ref: block.Use_chart_from()?.remote()?.ref().description,

				/** file */
				file_ref: block.File()?.remote()?.ref().description,
			}
		}

		@ $mol_action
		static deserialize_data( block: $shm_hitalama_board_block, dto: ReturnType< typeof $shm_hitalama_board_transfer_block['serialize'] > ) {

			block.title( dto.title == dto.ref ? block.ref().description : dto.title )
			block.Body_x( dto.body_x )?.val( dto.body_x )
			block.Body_y( dto.body_y )?.val( dto.body_y )
			block.Bottom_edge_y( dto.bottom_edge_y )?.val( dto.bottom_edge_y )
			block.Right_edge_x( dto.right_edge_x )?.val( dto.right_edge_x )
			block.Top_edge_y( dto.top_edge_y )?.val( dto.top_edge_y )
			block.Left_edge_x( dto.left_edge_x )?.val( dto.left_edge_x )
			block.Opacity( dto.opacity )?.val( dto.opacity )
			block.Type( dto.type )?.val( dto.type! )
			block.Color( null )?.val( dto.color )
			block.Font_size( null )?.val( dto.font_size )
			block.Text( dto.text )?.value( dto.text )
			block.Enabled( dto.enabled )?.val( dto.enabled )

			if( dto.chart ) {
				const chart = block.Chart(null)
				chart?.Block(null)?.remote( block )
				$shm_hitalama_board_transfer_chart.deserialize( chart!, dto.chart )
			}
			if( dto.range ) {
				const range = block.range()
				range.value( dto.range.value )
				range.min( dto.range.min )
				range.max( dto.range.max )
				range.step( dto.range.step )
			}
			
			if( dto.image_blob_uri ) {
				const blob = this.$.$mol_wire_sync(this.$.$mol_fetch).blob( dto.image_blob_uri )
				block.Image(null)!.blob( blob )
			}
		}

		@ $mol_action
		static deserialize_refs( block: $shm_hitalama_board_block, dto: ReturnType< typeof $shm_hitalama_board_transfer_block['serialize'] >, ref_remap: (ref: string)=> string ) {
			if( dto.type_custom ) {
				const custom = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.type_custom )! ), $shm_hitalama_board_custom )
				block.Type_custom(null)?.remote( custom )
			}
			if( dto.custom ) {
				const custom = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.custom )! ), $shm_hitalama_board_custom )
				block.Custom(null)?.remote( custom )
			}
			if( dto.use_chart_from_ref ) {
				const use_from = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.use_chart_from_ref )! ), $shm_hitalama_board_block )
				block.Use_chart_from(null)?.remote( use_from )
			}
			if( dto.use_text_from_ref ) {
				const use_from = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.use_text_from_ref )! ), $shm_hitalama_board_block )
				block.Use_text_from(null)?.remote( use_from )
			}
			if( dto.table_ref ) {
				const table = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.table_ref )! ), $shm_hitalama_board_table )
				block.Table(null)?.remote( table )
			}
			if( dto.file_ref ) {
				const file = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.file_ref )! ), $shm_hitalama_file )
				block.File(null)?.remote( file )
			}
			if( dto.form_edit_ref ) {
				const form = $hyoo_crus_glob.Node( $hyoo_crus_ref( ref_remap( dto.form_edit_ref )! ), $shm_hitalama_board_form )
				block.Form_edit(null)?.remote( form )
			}
		}
		
	}
}
