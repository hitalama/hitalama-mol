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
			if( this.selected_refs().length > 1 ) return []
			const blocks = this.board().Blocks()?.remote_list() ?? []
			const sticks = [ ...super.sticks_x( ref ) ]
			blocks.forEach( b => {
				if( b.ref() != ref ) sticks.push( ...this.sticks_x_by_block( b.ref() ) )
			} )
			return sticks
		}

		@ $mol_mem_key
		sticks_y( ref: $hyoo_crus_ref ) {
			if( this.selected_refs().length > 1 ) return []
			const blocks = this.board().Blocks()?.remote_list() ?? []
			const sticks = [ ...super.sticks_y( ref ) ]
			blocks.forEach( b => {
				if( b.ref() != ref ) sticks.push( ...this.sticks_y_by_block( b.ref() ) )
			} )
			return sticks
		}

		@ $mol_mem_key
		drags_synced( ref: $hyoo_crus_ref ): readonly ( $.$shm_hitalama_drag )[] {
			return this.selected_refs().flatMap( sref => sref == ref ? [] : [this.Block(sref).Sub().Drag()] )
		}

		@ $mol_mem
		pull_drags_synced() {
			return this.blocks().map( b => this.drags_synced( b.block().ref() ) )
		}

		@ $mol_mem_key
		selected( ref: $hyoo_crus_ref, next?: boolean ): boolean {
			if( next === undefined ) return this.selected_refs().includes(ref)

			if( next ) {
				if( this.shift_pressed() ) {
					const set = new Set([ ...this.selected_refs(), ref ])
					this.selected_refs( [...set.values()] )
				} else if( !this.selected_refs().includes(ref) ) {
					this.selected_refs( [ ref ] )
				}
			} else {
				this.selected_refs( 
					this.shift_pressed() ? this.selected_refs().filter( r => r !== ref ) : []
				)
			}

			return next
		}

		back_pointerdown( event: PointerEvent ) {
			this.deselect_all()

			this.selecting( true )
			this.select_rect_start_x( event.clientX )
			this.select_rect_start_y( event.clientY )

			const mousemove =  new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mousemove',
				$mol_wire_async( event => {
					this.select_rect_end_x( event.clientX )
					this.select_rect_end_y( event.clientY )
		
					const left = parseFloat( this.select_rect_left() )
					const top = parseFloat( this.select_rect_top() )
					const width = parseFloat( this.select_rect_width() )
					const height = parseFloat( this.select_rect_height() )
		
					const blocks = this.blocks().filter( b => {
						if( left + width < b.Sub().left() ) return
						if( top + height < b.Sub().top() ) return
						if( left > b.Sub().left() + b.Sub().width() ) return
						if( top > b.Sub().top() + b.Sub().height() ) return
						return true
					} )
		
					this.selected_refs( blocks.map( b => b.block().ref() ) )
				} ),
			)

			const mouseup = new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'mouseup',
				$mol_wire_async( event => {
					this.selecting( false )
					mouseup?.destructor()
					mousemove?.destructor()
				} ),
			)
		}

		deselect_all() {
			const blocks = this.board().Blocks()?.remote_list() ?? []
			blocks.forEach( b => this.selected( b.ref(), false ) )
		}

		back_contextmenu( event: PointerEvent ) {
			event.preventDefault()
			this.context_menu_left( event.offsetX+'px' )
			this.context_menu_top( event.offsetY+'px' )
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
		block_add( type: (typeof $shm_hitalama_board_block_types)[number], x = 0, y = 0, right_x = 0, bottom_x = 0 ) {
			const block = this.board().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Type(null)?.val( type )
			block?.Body_x(null)?.val( x )
			block?.Body_y(null)?.val( y )
			block?.Right_edge_x(null)?.val( right_x )
			block?.Bottom_edge_y(null)?.val( bottom_x )
			return block
		}

		@ $mol_action
		paste_text( text: string ) {
			const block = this.block_add( 'text' )
			block?.Text(null)?.value( text )
			return block
		}

		@ $mol_action
		text_add() {
			const block = this.block_add( 'text', parseFloat( this.context_menu_left() ), parseFloat( this.context_menu_top() ), 100 )
			block?.Text(null)?.value( 'text' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		input_add() {
			const block = this.block_add( 'input', parseFloat( this.context_menu_left() ), parseFloat( this.context_menu_top() ), 100 )
			block?.Text(null)?.value( 'Hello' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		iframe_add() {
			const block = this.block_add( 'iframe', parseFloat( this.context_menu_left() ), parseFloat( this.context_menu_top() ), 500, 700 )
			block?.Src(null)?.val( 'https://www.google.com/search?igu=1' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		form_add() {
			const block = this.block_add( 'form', parseFloat( this.context_menu_left() ), parseFloat( this.context_menu_top() ), 400, 400 )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		table_add() {
			const block = this.block_add( 'table', parseFloat( this.context_menu_left() ), parseFloat( this.context_menu_top() ), 400, 400 )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		image_add( blob: Blob ) {
			const block = this.block_add( 'text' )
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
		shift_pressed( next?: boolean ) {
			return next ?? false
		}

		@ $mol_mem
		keydown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keydown',
				$mol_wire_async( event => {
					if( event.key == 'Delete' ) {
						const refs = this.selected_refs()
						if( refs.some( r => this.editing( r ) ) ) return
						refs.forEach( r => this.block_delete( r ) )
					}
					else if( event.key == 'Shift' ) {
						this.shift_pressed( true )
					}
				} ),
			)
		}

		@ $mol_mem
		keyup_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keyup',
				$mol_wire_async( event => {
					if( event.key == 'Shift' ) {
						this.shift_pressed( false )
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

					const refs = this.selected_refs()
					if( refs.some( r => this.editing( r ) ) ) return

					const items = ( event.clipboardData || event.originalEvent.clipboardData ).items
					for( let index in items ) {
						const item = items[ index ]
						if( item.type === 'text/plain' ) {
							item.getAsString( ( s: string) => {
								$mol_wire_async( this ).paste_text( s )
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

		select_rect() {
			return this.selecting() ? super.select_rect() : []
		}

		@ $mol_mem
		select_rect_left(): string {
			return ( Math.min( this.select_rect_start_x(), this.select_rect_end_x() )
				- this.Pane().view_rect()!.left ) + 'px'
		}

		@ $mol_mem
		select_rect_top(): string {
			return ( Math.min( this.select_rect_start_y(), this.select_rect_end_y() )
				- this.Pane().view_rect()!.top ) + 'px'
		}

		@ $mol_mem
		select_rect_width(): string {
			const start_x = this.select_rect_start_x()
			const end_x = this.select_rect_end_x()
			return Math.abs( end_x - start_x ) + 'px'
		}

		@ $mol_mem
		select_rect_height(): string {
			const start_y = this.select_rect_start_y()
			const end_y = this.select_rect_end_y()
			return Math.abs( end_y - start_y ) + 'px'
		}

	}

}
