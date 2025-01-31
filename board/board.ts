namespace $ {

	export class $shm_hitalama_board extends $hyoo_crus_entity.with({

		Blocks: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_block ),
		Block_by_name: $hyoo_crus_dict_to( $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ) ),

		Last_color: $hyoo_crus_atom_str,
		Last_font_size: $hyoo_crus_atom_real,

		Search_statistics: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_form ),

		Files: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_file ),

		Tables: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_table ),

		Description: $hyoo_crus_atom_str,

		Presences: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_presence_dict ),

	}){
		
		@ $mol_mem_key
		block( ref: string ) {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( ref ), $shm_hitalama_board_block )
		}

		@ $mol_action
		block_add(
			type: (typeof $shm_hitalama_board_block_types)[number], 
			pos: readonly [number, number] | readonly number[] = [0,0],
			right_x = 200, bottom_x = 100,
			name?: string,
		) {
			if( name ) {
				const by_name = this.Block_by_name(null)?.key( name )
				if( by_name ) return by_name.remote()
				
				// try {
				// 	const by_ref = this.block( name_or_ref )
				// 	if( by_ref ) return by_ref
				// } catch (error) {
				// 	console.error( error )
				// }
			}

			const block = this.Blocks(null)?.make( this.land() )
			const title = name || block?.ref().description?.toString()!
			this.Block_by_name(null)?.key( title, 'auto' ).remote( block )
			block?.title(title)
			block?.Board(null)?.remote( this )
			block?.Type(null)?.val( type )
			block?.Body_x(null)?.val( pos[0] )
			block?.Body_y(null)?.val( pos[1] )
			block?.Right_edge_x(null)?.val( right_x )
			block?.Bottom_edge_y(null)?.val( bottom_x )
			return block
		}

		@ $mol_action
		table_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			right_x = 200, bottom_x = 100,
			name?: string,
		) {
			const block = this.block_add( 'table', pos, right_x, bottom_x, name )
			block?.table().Board(null)?.remote( this )
			return block
		}

		@ $mol_action
		text_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			text = 'text',
			right_x = 200, bottom_x = 100,
		) {
			const block = this.block_add( 'text', pos, right_x, bottom_x )
			block?.Text(null)?.value( text )
			block?.Font_size(null)?.val( this.Last_font_size()?.val() )
			block?.Color(null)?.val( this.Last_color()?.val() )
			return block
		}

		@ $mol_mem
		search_statistics() {
			return this.Search_statistics()?.remote_list() ?? []
		}

		@ $mol_action
		search_statistics_cut( index: number ) {
			this.Search_statistics()?.wipe( index )
		}

		@ $mol_mem
		serialized() {
			return this.serialize()
		}

		@ $mol_action
		serialize() {
			const table_nodes = new Set< $shm_hitalama_board_table >

			const blocks = this.Blocks()?.remote_list().map( b => {
				const table = b.Table()?.remote()
				if( table ) table_nodes.add( table )
				return b.serialize()
			} )
			const tables = [...table_nodes].map( t => t.serialize() )
			const files = this.Files()?.remote_list().map( f => f.serialize() )
			const search_statistics = this.Search_statistics()?.remote_list().map( f => f.serialize() )

			return {
				title: this.title(),
				last_color: this.Last_color()?.val(),
				last_font_size: this.Last_font_size()?.val(),
				description: this.Description()?.val(),

				blocks,
				tables,
				files,
				search_statistics,
			}
		}

		ref_remap = new Map< string, string >
		@ $mol_action
		deserialize( dto: ReturnType< $shm_hitalama_board['serialize'] > ) {
			this.title( dto.title )
			this.Last_color( dto.last_color )?.val( dto.last_color )
			this.Last_font_size( dto.last_font_size )?.val( dto.last_font_size )
			this.Description( dto.description )?.val( dto.description )

			dto.files?.forEach( dto => {
				const file = this.Files(null)?.make( this.land() )
				this.ref_remap.set( dto.ref!, file?.ref().description! )
				file?.deserialize( dto )
			} )

			dto.tables?.forEach( dto => {
				const table = this.Tables(null)?.make( this.land() )
				table?.Board(null)?.remote( this )
				this.ref_remap.set( dto.ref!, table?.ref().description! )
				table?.deserialize( dto )
			} )

			dto.search_statistics?.forEach( dto => {
				this.deserialize_statistic( dto.ref!, dto )
			} )

			this.deserialize_blocks( dto )
		}

		@ $mol_mem_key
		deserialize_statistic( dto_ref: string, dto: ReturnType< $shm_hitalama_board_form['serialize'] > ) {
			if( this.ref_remap.has( dto_ref ) ) return dto
			const item = this.Search_statistics(null)?.make( this.land() )
			this.ref_remap.set( dto_ref!, item?.ref().description! )
			item?.deserialize_data( dto )
			item?.deserialize_refs( dto, this.ref_remap )
			return dto
		}

		@ $mol_action
		deserialize_blocks( dto: ReturnType< $shm_hitalama_board['serialize'] > ) {
			const block_and_dto = dto.blocks?.map( dto => {
				const block = this.Blocks(null)?.make( this.land() )
				block?.Board(null)?.remote( this )
				this.Block_by_name(null)?.key( dto.title!, 'auto' ).remote( block )
				this.ref_remap.set( dto.ref!, block?.ref().description! )
				return { block, dto }
			} )

			block_and_dto?.forEach( ({block, dto})=> {
				block?.Board(null)?.remote( this )
				block?.deserialize_data( dto )
			} )

			block_and_dto?.forEach( ({block, dto})=> {
				block?.deserialize_refs( dto, this.ref_remap )
			} )
		}
		
	}

}
