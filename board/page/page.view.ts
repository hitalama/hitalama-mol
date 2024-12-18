namespace $.$$ {
	
	export class $shm_hitalama_board_page extends $.$shm_hitalama_board_page {

		@ $mol_mem
		board(): $shm_hitalama_board {
			return this.entity().cast( $shm_hitalama_board )
		}

		Board_page() {
			return this
		}

		@ $mol_mem
		board_id() {
			return this.board().ref().description!
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
		block_by_ref( ref: $hyoo_crus_ref ) {
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
			this.select_start( event )
		}

		select_resize() {
			const [left, top] = this.select_rect_pos()
			const [width, height] = this.select_rect_size()

			const blocks = this.blocks().filter( b => {
				if( left + width < b.Sub().left() ) return
				if( top + height < b.Sub().top() ) return
				if( left > b.Sub().left() + b.Sub().width() ) return
				if( top > b.Sub().top() + b.Sub().height() ) return
				return true
			} )

			this.selected_refs( blocks.map( b => b.block().ref() ) )
		}

		deselect_all() {
			const blocks = this.board().Blocks()?.remote_list() ?? []
			blocks.forEach( b => this.selected( b.ref(), false ) )
		}

		back_contextmenu( event: PointerEvent ) {
			event.preventDefault()
			this.context_menu_pos( [event.offsetX, event.offsetY] )
			this.context_menu_visible( true )
		}

		@ $mol_mem
		context_menu_pos( next?: readonly [number, number] ) {
			return next ?? [0,0]
		}
		
		@ $mol_mem
		context_menu_left(): string {
			return this.context_menu_pos()[0] + 'px'
		}
		
		@ $mol_mem
		context_menu_top(): string {
			return this.context_menu_pos()[1] + 'px'
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
		text_add() {
			const block = this.board().block_add( 'text', this.context_menu_pos() )
			block?.Text(null)?.value( 'text' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		input_add() {
			const block = this.board().block_add( 'input', this.context_menu_pos() )
			block?.Text(null)?.value( 'Hello' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		iframe_add() {
			const block = this.board().block_add( 'iframe', this.context_menu_pos(), 500, 700 )
			block?.Src(null)?.val( 'https://www.google.com/search?igu=1' )
			this.context_menu_visible( false )
			return block
		}

		@ $mol_action
		form_add() {
			const form_pos = this.context_menu_pos()
			const form = this.board().block_add( 'form', form_pos, 450, 780 )
			
			const table_pos = [ form_pos[0] + 460, form_pos[1]] as const
			const block_table = this.board().table_add( table_pos, 1000, 780 )!
			block_table.table_head( [ 'Запрос', 'Минус', 'Период', 'Страна', 'Язык', 'СМИ', 'Соц.медиа', 'Type', 'Tags', 'Category', ] )
			block_table.Table(null)?.ensure( block_table.land() )?.Rows_method(null)?.val( "return board.search_statistics().map( s => [\n	s.query(),\n	s.excluded_words(),\n	s.prediod(),\n	s.country(),\n	s.language(),\n	s.mass_media_title(),\n	s.social_media_title(),\n	s.type(),\n	s.tags(),\n	s.category(),\n] )" )

			const code_pos = [ form_pos[0], form_pos[1] + 790 ] as const
			const code = this.board().block_add( 'code', code_pos, 1220, 680 )
			code?.Text(null)?.value( "const block = board.table_add( page.pointer_pos(), 800, 780 )\n\nblock.table_head( [ 'Дата', 'Кол-во', 'Позитив', 'Негатив', 'Запрос', 'Минус', 'Область поиска', 'Страна', 'Язык' ] )\n\nconst rows = []\n\nboard.search_statistics().forEach( s => {\n	if( !s.query() ) return\n\n	s.File_mass_media()?.remote()?.File()?.remote()?.str()?.split('\\n')?.forEach( line => {\n		const [ date, count, positive, negative ] = line.split(';')\n		if( isNaN( Number( count ) ) ) return\n		rows.push( [ date, count, positive, negative, s.query(), s.excluded_words(), 'СМИ', s.country(), s.language() ] )\n	} )\n\n	s.File_social_media()?.remote()?.File()?.remote()?.str()?.split('\\n')?.forEach( line => {\n		console.log(line)\n		const [ date, count, positive, negative ] = line.split(';')\n		if( isNaN( Number( count ) ) ) return\n		rows.push( [ date, count, positive, negative, s.query(), s.excluded_words(), 'Соц.медиа', s.country(), s.language() ] )\n	} )\n\n} )\n\nblock.table_rows( rows )\n" )

			this.context_menu_visible( false )
		}

		@ $mol_action
		image_add( blob: Blob ) {
			const pos =  this.pointer_pos()
			const block = this.board().block_add( 'text', pos, 0, 0 )
			block?.Image(null)?.blob( blob )
			return block
		}

		@ $mol_action
		paste_text( text: string ) {
			const pos =  this.pointer_pos()
			const block = this.board().block_add( 'text', pos )
			block?.Text(null)?.value( text )
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

						if( ['INPUT', 'TEXTAREA']
							.includes( $mol_view_selection.focused()[0].nodeName )
						) return
						
						const refs = this.selected_refs()
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

					if( ['INPUT', 'TEXTAREA']
						.includes( $mol_view_selection.focused()[0].nodeName )
					) return

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

	}

}
