namespace $.$$ {

	$$.$mol_text_code_row.prototype.minimal_height = ()=> 0
	
	export class $shm_hitalama_board_page extends $.$shm_hitalama_board_page {

		@ $mol_mem
		board(): $shm_hitalama_board {
			return this.entity().cast( $shm_hitalama_board )
		}

		@ $mol_mem
		board_id() {
			return this.board().ref().description
		}
		
		@ $mol_action
		board_cut() {
			$shm_hitalama_profile.current()?.boards()?.cut( this.board().ref() )
		}

		@ $mol_action
		block_add() {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Text(null)?.value( 'text' )
			block?.Body_x(null)?.val( parseFloat( this.context_menu_left() ) )
			block?.Body_y(null)?.val( parseFloat( this.context_menu_top() ) )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		block_delete( ref: $hyoo_crus_ref ) {
			this.board().Blocks(null)?.cut( ref )
		}

		@ $mol_action
		block_to_top( ref: $hyoo_crus_ref ) {
			const pos = this.pos_by_ref.get( ref.description! )!
			this.board().Blocks(null)?.move( pos, this.board().Blocks(null)?.remote_list().length! )
		}

		@ $mol_action
		block_to_bottom( ref: $hyoo_crus_ref ) {
			const pos = this.pos_by_ref.get( ref.description! )!
			this.board().Blocks(null)?.move( pos, 0 )
		}

		@ $mol_mem_key
		block( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_board_block )
		}

		pos_by_ref: Map< string, number > = new Map
		@ $mol_mem
		blocks() {
			return this.board().Blocks()?.remote_list().map( (f, i) => {
				this.pos_by_ref.set( f.ref().description!, i )
				return this.Block( f.ref() )
			} ) ?? []
		}

		@ $mol_mem
		blocks_clear() {
			this.board().Blocks()?.remote_list( [] )
		}

		@ $mol_mem_key
		sticks_y_by_block( ref: $hyoo_crus_ref ) {
			const height = this.block_height( ref )
			const top = this.block_top( ref )
			return [ top, top + height ]
		}

		@ $mol_mem_key
		sticks_x_by_block( ref: $hyoo_crus_ref ) {
			const width = this.block_width( ref )
			const left = this.block_left( ref )
			return [ left, left + width ]
		}

		@ $mol_mem_key
		sticks_x( ref: $hyoo_crus_ref ) {
			const blocks = this.board().Blocks()?.remote_list() ?? []
			const sticks = [ ...super.sticks_x( ref ) ]
			blocks.forEach( b => {
				if( b.ref() != ref ) sticks.push( ...this.sticks_x_by_block( b.ref() ) )
			} )
			return sticks
		}

		@ $mol_mem_key
		sticks_y( ref: $hyoo_crus_ref ) {
			const blocks = this.board().Blocks()?.remote_list() ?? []
			const sticks = [ ...super.sticks_y( ref ) ]
			blocks.forEach( b => {
				if( b.ref() != ref ) sticks.push( ...this.sticks_y_by_block( b.ref() ) )
			} )
			return sticks
		}

		@ $mol_mem_key
		selected( ref: $hyoo_crus_ref, next?: boolean ): boolean {
			if( next === undefined ) return this.selected_ref() == ref
			this.selected_ref( ref )
			return next
		}

		back_pointerdown( e: PointerEvent ) {
			this.deselect_all()
		}

		deselect_all() {
			const blocks = this.board().Blocks()?.remote_list() ?? []
			blocks.forEach( b => this.selected( b.ref(), false ) )
		}

		back_contextmenu( e: PointerEvent ) {
			e.preventDefault()
			this.context_menu_left( e.offsetX+'px' )
			this.context_menu_top( e.offsetY+'px' )
			this.context_menu_visible( true )
		}

		context_menu(): readonly ( any )[] {
			return this.context_menu_visible() ? super.context_menu() : []
		}

		context_menu_pointerenter( next?: any ) {
			this.context_menu_hovered( true )
		}

		context_menu_pointerleave( next?: any ) {
			this.context_menu_hovered( false )
		}

		@ $mol_action
		text_add( text: string ) {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Text(null)?.value( text )
			return block
		}

		@ $mol_action
		input_add() {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Text(null)?.value( 'Hello' )
			block?.Type(null)?.val( 'input' )
			block?.Body_x(null)?.val( parseFloat( this.context_menu_left() ) )
			block?.Body_y(null)?.val( parseFloat( this.context_menu_top() ) )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		iframe_add() {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Src(null)?.val( 'https://www.google.com/search?igu=1' )
			block?.Type(null)?.val( 'iframe' )
			block?.Body_x(null)?.val( parseFloat( this.context_menu_left() ) )
			block?.Body_y(null)?.val( parseFloat( this.context_menu_top() ) )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		image_add( blob: Blob ) {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Image(null)?.blob( blob )
			return block
		}

		@ $mol_mem
		pointerdown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'pointerdown',
				$mol_wire_async( event => {
					if( !this.context_menu_hovered() ) this.context_menu_visible( false )
				} ),
			)
		}

		@ $mol_mem
		keydown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keydown',
				$mol_wire_async( event => {
					if( event.key == 'Delete' ) {
						const ref = this.selected_ref()
						if( !ref || this.editing( ref ) ) return
						this.block_delete( ref )
					}
				} ),
			)
		}

		@ $mol_mem
		paste_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'paste',
				$mol_wire_async( event => {

					if( this.editing( this.selected_ref() ) ) return

					// event.preventDefault()
					const items = ( event.clipboardData || event.originalEvent.clipboardData ).items
					for( let index in items ) {
						const item = items[ index ]
						if( item.type === 'text/plain' ) {
							item.getAsString( ( s: string) => {
								$mol_wire_async( this ).text_add( s )
							} )
						}
						if( item.kind === 'file' ) {
							const blob = item.getAsFile()
							$mol_wire_async( this ).image_add( blob )
						}
					}

				} ),
			)
		}

	}

}
