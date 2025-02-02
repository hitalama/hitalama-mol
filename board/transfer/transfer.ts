namespace $ {

	export class $shm_hitalama_board_transfer extends $mol_object {
		
		board(): $shm_hitalama_board {
			throw new Error("Not implemented")
		}

		@ $mol_action
		serialize_board() {
			const table_nodes = new Set< $shm_hitalama_board_table >

			const blocks = this.board().Blocks()?.remote_list().map( b => {
				const table = b.Table()?.remote()
				if( table ) table_nodes.add( table )
				return $shm_hitalama_board_transfer_block.serialize( b )
			} )
			const tables = [...table_nodes].map( t => $shm_hitalama_board_transfer_table.serialize( t ) )
			const files = this.board().Files()?.remote_list().flatMap( f => {
				try {
					return [ $shm_hitalama_board_transfer_file.serialize( f ) ]
				} catch (error) {
					if( !$mol_promise_like( error ) ) return []
					throw error
				}
			} )
			const search_statistics = this.board().Search_statistics()?.remote_list().map( f => f.serialize() )

			return {
				title: this.board().title(),
				last_color: this.board().Last_color()?.val(),
				last_font_size: this.board().Last_font_size()?.val(),
				description: this.board().Description()?.val(),

				blocks,
				tables,
				files,
				search_statistics,
			}
		}

		@ $mol_action
		serialize_blocks( source: $shm_hitalama_board_block[] ) {
			const table_nodes = new Set< $shm_hitalama_board_table >

			const blocks = source.map( b => {

				if( b.type() == 'table' ) {
					const table = b.Table()?.remote()
					if( table ) table_nodes.add( table )
				}

				return $shm_hitalama_board_transfer_block.serialize( b )

			} )

			const tables = [...table_nodes].map( t => $shm_hitalama_board_transfer_table.serialize( t ) )

			return {
				blocks,
				tables,
			}
		}

		ref_remapping = new Map< string, string >
		ref_remap = ( ref: string )=> {
			return this.ref_remapping.get( ref ) ?? ref
		}

		@ $mol_action
		deserialize( dto: ReturnType< $shm_hitalama_board['serialize'] > ) {
			this.board().title( dto.title )
			this.board().Last_color( dto.last_color )?.val( dto.last_color )
			this.board().Last_font_size( dto.last_font_size )?.val( dto.last_font_size )
			this.board().Description( dto.description )?.val( dto.description )

			this.deserialize_files( dto.files )
			this.deserialize_tables( dto.tables )
			this.deserialize_statistics( dto.search_statistics )
			this.deserialize_blocks( dto.blocks )
		}

		@ $mol_action
		deserialize_statistics( statistics: ReturnType< $shm_hitalama_board['serialize'] >['search_statistics'] ) {
			statistics?.forEach( dto => {
				const item = this.statistic_by_dto_ref( dto.ref! )
				this.ref_remapping.set( dto.ref!, item?.ref().description! )
				item?.deserialize_data( dto )
				item?.deserialize_refs( dto, this.ref_remapping )
			} )
		}

		@ $mol_mem_key
		statistic_by_dto_ref( dto_ref: string ) {
			const item = this.board().Search_statistics(null)?.make( this.board().land() )
			return item
		}

		@ $mol_mem_key
		block_by_dto_ref( dto_ref: string ) {
			const block = this.board().Blocks(null)?.make( this.board().land() )
			return block
		}

		@ $mol_mem_key
		file_by_dto_ref( dto_ref: string ) {
			const file = this.board().Files(null)?.make( this.board().land() )
			return file
		}

		@ $mol_mem_key
		table_by_dto_ref( dto_ref: string ) {
			const table = this.board().Tables(null)?.make( this.board().land() )
			return table
		}

		@ $mol_action
		deserialize_files( files: ReturnType< $shm_hitalama_board['serialize'] >['files'] ) {
			files?.forEach( dto => {
				const file = this.file_by_dto_ref( dto.ref! )
				this.ref_remapping.set( dto.ref!, file?.ref().description! )
				$shm_hitalama_board_transfer_file.deserialize( file!, dto )
			} )
		}

		@ $mol_action
		deserialize_tables( tables: ReturnType< $shm_hitalama_board['serialize'] >['tables'] ) {
			tables?.forEach( dto => {
				const table = this.table_by_dto_ref( dto.ref! )
				table?.Board(null)?.remote( this.board() )
				this.ref_remapping.set( dto.ref!, table?.ref().description! )
				$shm_hitalama_board_transfer_table.deserialize( table!, dto )
			} )
		}

		@ $mol_action
		deserialize_blocks( blocks: ReturnType< $shm_hitalama_board['serialize'] >['blocks'] ) {
			const block_and_dto = blocks?.map( dto => {
				const block = this.block_by_dto_ref( dto.ref! )
				block?.Board(null)?.remote( this.board() )
				this.board().Block_by_name(null)?.key( dto.title!, 'auto' ).remote( block )
				this.ref_remapping.set( dto.ref!, block?.ref().description! )
				return { block, dto }
			} )
			
			block_and_dto?.forEach( ({block, dto})=> {
				$shm_hitalama_board_transfer_block.deserialize_data( block!, dto )
			} )

			block_and_dto?.forEach( ({block, dto})=> {
				$shm_hitalama_board_transfer_block.deserialize_refs( block!, dto, this.ref_remap )
			} )
		}
		
	}
	
}
