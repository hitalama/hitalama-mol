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

		Customs: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_board_custom ),

	}){
		
		@ $mol_mem_key
		block( ref: string ) {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( ref ), $shm_hitalama_board_block )
		}
		
		block_text( ref: string, next?: string ) {
			return this.block( ref ).text( next )
		}
		
		block_data( ref: string, next?: any ) {
			return this.block( ref ).data( next )
		}
		
		block_value( ref: string, next?: any ) {
			const block = this.block( ref )
			
			if( block.type() == 'range' ) return block.range().value( next )
			
			else if( block.type() == 'form_custom' ) return block.data()

			else if( block.type() == 'table' ) {
				const custom = block.table().form_custom()
				if( custom ) return custom.objects()

				const head = block.table_head()
				const rows = block.table_rows()
				return rows.map( r => Object.fromEntries( head.map( (h, i)=> [ h, r[i] ] ) ) )
			}


			if( next === undefined ) return block.preprocessed()
			
			return block.text( next )
		}

		@ $mol_mem
		static execute_init_code() {
			$mol_wire_solid()
			return this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_execute_init.js' ) )
		}

		execute( code: string, context?: Record< string, any > ) {

			context = {
				board: this,
				page: undefined,
				to_table,
				... context,
			}

			let vars = ''
			for( const key in context ) {
				vars += `const ${key} = this.${key};\n`
			}

			const code_full = vars + $shm_hitalama_board.execute_init_code() + code
			const func = new Function( code_full )
			const res = func.call( context )
			return res
		}

		@ $mol_action
		block_add(
			type: (typeof $shm_hitalama_board_block_types)[number], 
			pos: readonly [number, number] | readonly number[] = [0,0],
			width = 200, height = 100,
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
			block?.Right_edge_x(null)?.val( width )
			block?.Bottom_edge_y(null)?.val( height )
			return block
		}

		@ $mol_action
		table_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			width = 200, height = 100,
			name?: string,
		) {
			const block = this.block_add( 'table', pos, width, height, name )
			block?.table().Board(null)?.remote( this )
			return block
		}

		@ $mol_action
		table_novirt_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			width = 200, height = 100,
			name?: string,
		) {
			const block = this.block_add( 'table_novirt', pos, width, height, name )
			block?.table().Board(null)?.remote( this )
			return block
		}

		@ $mol_action
		text_add( 
			pos: readonly [number, number] | readonly number[] = [0,0],
			text = 'text',
			width = 200, height = 100,
		) {
			const block = this.block_add( 'text', pos, width, height )
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
		get_transfer() {
			return $shm_hitalama_board_transfer.make({
				board: ()=> this
			})
		}

		@ $mol_action
		serialize() {
			const transfer = this.get_transfer()
			return transfer.serialize_board()
		}

		@ $mol_action
		serialize_blocks( blocks: $shm_hitalama_board_block[] ) {
			const transfer = this.get_transfer()
			return transfer.serialize_blocks( blocks )
		}

		@ $mol_action
		deserialize( dto: ReturnType< $shm_hitalama_board['serialize'] > ) {
			const transfer = this.get_transfer()
			transfer.deserialize( dto )
		}
		
	}

	function to_table( obj: any ) {
		if( obj.head && obj.rows ) return {
			_format: 'table',
			table: obj
		}

		const keys = new Map< string, number >
		const arr = Array.isArray(obj) ? obj : [obj]
		const rows: any[][] = []
		arr.forEach( obj => {
			const row: any[] = []
			rows.push( row )
			for( const key in obj ) {
				const index = keys.get( key ) ?? keys.size
				keys.set( key, index )
				row[ index ] = obj[ key ]
			}
		} )

		return {
			_format: 'table',
			table: { head: [ ...keys.keys() ], rows }
		}
	}

}
