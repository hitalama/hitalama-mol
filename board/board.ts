namespace $ {

	export class $shm_hitalama_board extends $hyoo_crus_entity.with({

		Blocks: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_block ),
		Block_by_name: $hyoo_crus_dict_to( $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ) ),

		Last_color: $hyoo_crus_atom_str,
		Last_font_size: $hyoo_crus_atom_real,

		Search_statistics: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_form ),

		Files: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_file ),

		Description: $hyoo_crus_atom_str,

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
			if( name && this.Block_by_name(null)?.key( name ) ) {
				return this.Block_by_name(null)?.key( name ).remote()
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
			block?.table().Block(null)?.remote( block )
			return block
		}

		@ $mol_action
		text_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			text = 'text',
			right_x = 200, bottom_x = 100,
		) {
			const block = this.block_add( 'text', pos, right_x, bottom_x )
			block?.table().Block(null)?.remote( block )
			block?.Text(null)?.value( text )
			block?.Font_size(null)?.val( this.Last_font_size()?.val() )
			block?.Color(null)?.val( this.Last_color()?.val() )
			return block
		}

		@ $mol_mem
		search_statistics() {
			return this.Search_statistics()?.remote_list() ?? []
		}
		
	}

}
