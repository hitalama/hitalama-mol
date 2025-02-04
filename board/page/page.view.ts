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

		@ $mol_mem
		description( next?: string ): string {
			return this.board().Description(next)?.val( next ) ?? ''
		}
		
		@ $mol_action
		board_cut() {
			$shm_hitalama_profile.current()?.boards()?.cut( this.board().ref() )
		}

		@ $mol_mem
		exported_file_name() {
			return this.board().title() + '.json'
		}

		@ $mol_mem
		exported_json() {
			const obj = this.board().serialized()
			const data_uri = "data:text/json;charset=utf-8," + encodeURIComponent( JSON.stringify( obj, null, '\t' ) )
			return data_uri
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
		drags_synced( ref: $hyoo_crus_ref ): readonly ( $.$rise_drag )[] {
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

		reset_scale() {
			this.zoom( 1 )
		}

		@ $mol_mem_key
		hovered( ref: $hyoo_crus_ref, next?: boolean ): boolean {
			if( next == true ) this.hovered_ref( ref )
			if( next == false && this.hovered_ref() == ref ) this.hovered_ref( null )
			return next ?? false
		}

		@ $mol_mem
		prevent_zoom() {
			const ref = this.hovered_ref()
			if( !ref ) return false
			return this.has_scrollbar( ref ) ?? false
		}

		select_resize() {
			let [left, top] = this.select_rect_pos()
			;[left, top] = this.to_real_pos( [left, top] )

			let [width, height] = this.select_rect_size()
			const zoom = this.zoom()
			;width /= zoom
			;height /= zoom

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

		back_event_pointerdown_last?: PointerEvent
		back_event_pointerdown( event: PointerEvent ) {
			this.back_event_pointerdown_last = event
			if( event.button != 2 ) this.deselect_all()
			this.select_start( event )
		}

		back_event_contextmenu( event: PointerEvent ) {
			event.preventDefault()

			if( !this.back_event_pointerdown_last
				|| is_panning( this.back_event_pointerdown_last, event )
			) return
			
			this.contextmenu_body( [ this.Back_contextmenu_body() ] )
			this.contextmenu_pos( [event.offsetX, event.offsetY] )
			this.contextmenu_showed( true )
		}

		@ $mol_mem_key
		block_event_contextmenu( ref: $hyoo_crus_ref, event?: PointerEvent ) {
			const Body = this.Block_contextmenu_body( ref )
			if( !Body ) return
			this.contextmenu_body( [ Body ] )
			this.contextmenu_pos( this.client_pos_to_pane_pos( [event!.clientX, event!.clientY] ) )
			this.contextmenu_showed( true )
		}

		@ $mol_mem
		contextmenu_pos( next?: readonly [number, number] ) {
			return next ?? [0,0]
		}

		@ $mol_mem
		contextmenu_real_pos() {
			return this.to_real_pos( this.contextmenu_pos() )
		}
		
		contextmenu_visible(): readonly ( any )[] {
			return this.contextmenu_showed() ? super.contextmenu_visible() : []
		}

		@ $mol_action
		text_add() {
			const block = this.board().text_add( this.contextmenu_real_pos() )
			this.contextmenu_showed( false )
			return block
		}

		@ $mol_action
		input_add() {
			const block = this.board().block_add( 'input', this.contextmenu_real_pos() )
			block?.Text(null)?.value( 'Hello' )
			this.contextmenu_showed( false )
			return block
		}

		@ $mol_action
		iframe_add() {
			const block = this.board().block_add( 'iframe', this.contextmenu_real_pos(), 500, 700 )
			block?.Src(null)?.val( 'https://www.google.com/search?igu=1' )
			this.contextmenu_showed( false )
			return block
		}

		@ $mol_action
		range_add() {
			const block = this.board().block_add( 'range', this.contextmenu_real_pos() )
			this.contextmenu_showed( false )
			return block
		}

		@ $mol_action
		guid_sync() {
			return $mol_guid()
		}

		@ $mol_action
		form_add() {
			const form_pos = this.contextmenu_real_pos()
			const form = this.board().block_add( 'form', form_pos, 450, 780 )
			
			const table_pos = [ form_pos[0] + 460, form_pos[1]] as const
			const block_table = this.board().table_novirt_add( table_pos, 1000, 780 )!
			block_table.table_head( [ 'Запрос', 'Минус', 'Период', 'Страна', 'Язык', 'Соц.медиа', 'СМИ', 'Type', 'Tags', 'Category', '' ] )
			block_table.table_col_types( [ 'any', 'any', 'any', 'any', 'any', 'file', 'file', 'any', 'any', 'any', 'action_delete' ] )
			const rows_method = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_search_statistics_rows.js' ) )
			block_table.Table(null)?.ensure( block_table.land() )?.Rows_method(null)?.val( rows_method )

			const code_pos = [ form_pos[0], form_pos[1] + 790 ] as const
			const code = this.board().block_add( 'code', code_pos, 1220, 680 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_table.js' ) )
				.replace( 'BLOCK_TITLE', `'${ 'Table_' + this.guid_sync() }'` )
			code?.Text(null)?.value( code_str )

			this.contextmenu_showed( false )
		}

		@ $mol_action
		deckgl_example_add() {
			const block = this.board().block_add( 'customdom', this.contextmenu_real_pos(), 700, 700 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_deckgl_example.js' ) )
			block?.Text(null)?.value( code_str )
			this.contextmenu_showed( false )
			return block
		}

		@ $mol_action
		echarts_example_add() {
			const block = this.board().block_add( 'customdom', this.contextmenu_real_pos(), 700, 500 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_echarts_example.js' ) )
			block?.Text(null)?.value( code_str )
			this.contextmenu_showed( false )
			return block
		}

		async image_blob_size( blob: Blob ) {
			const bmp = await createImageBitmap( blob )
			const { width, height } = bmp
			bmp.close() // free memory
			return { width, height }
		}

		@ $mol_action
		image_add( blob: Blob ) {
			const pos =  this.get_pointer_pos()
			const size = this.$.$mol_wire_sync( this ).image_blob_size( blob )

			const block = this.board().block_add( 'text', pos, size.width, size.height )
			block?.Image(null)?.blob( blob )
			return block
		}

		@ $mol_action
		paste_text( text: string ) {
			const pos =  this.get_pointer_pos()
			const block = this.board().text_add( pos, text )
			return block
		}

		@ $mol_action
		get_pointer_pos() {
			return this.to_real_pos( this.pointer_pos() )
		}

		@ $mol_mem
		shift_pressed( next?: boolean ) {
			return next ?? false
		}

		@ $mol_mem
		scale_percent() {
			return (this.zoom() * 100).toFixed(2) + '%'
		}
		
		@ $mol_mem
		presences() {
			const board = this.board()
			return board.Presences()?.remote() ?? board.Presences(null)?.ensure( {'': $hyoo_crus_rank_make( 'post', 'just' )} )
		}

		@ $mol_mem
		presence() {
			const profile = $shm_hitalama_profile.current()
			const id = profile?.ref().description?.toString()!
			const presence = this.presences()!.key( id, 'auto' ).ensure( profile?.land() )
			presence?.Profile(null)?.remote( profile )
			return presence
		}

		@ $mol_mem
		send_cursor_pos_atom() {
			new $mol_wire_atom( 'send_cursor_pos', ()=> {
				$mol_state_time.now(50)
				this.presence()?.Pos(null)?.val( this.get_pointer_pos() as number[] )
			} ).fresh()
		}

		@ $mol_mem_key
		cursor_pos( key: string ) {
			const presence = this.presences()?.key( key ).remote()
			return presence?.Pos()?.val()
		}

		@ $mol_mem
		cursors(): readonly ( any )[] {
			const profile = $shm_hitalama_profile.current()
			const id = profile?.ref().description?.toString()!

			return this.presences()?.keys().flatMap( key => {
				// return [ this.Cursor(key) ]
				return key == id ? [] : [ this.Cursor(key) ]
			} ) ?? []
		}

		@ $mol_action
		file_add( file: File, pos: [ number, number ] ) {
			const board_file = this.board().Files(null)?.make( this.board().land() )!
			board_file?.title( file.name )
			board_file?.Size(null)?.val( file.size )
			board_file?.File(null)!.ensure( this.board().land() )!.blob( file )

			const block = this.board().block_add( 'file', pos )!
			block!.File(null)!.remote( board_file )
			return block
		}

		@ $mol_action
		event_drop( event: DragEvent ) {
			event.preventDefault()

			const file_list = event.dataTransfer?.files
			if( !file_list ) return

			const files = [ ...file_list ].map( ( _, i ) => file_list.item( i )! )
			if( files.length == 0 ) return

			$mol_wire_async( ()=> {
				const pos = this.to_real_pos( this.client_pos_to_pane_pos( [ event.clientX, event.clientY ] ) )
				files.forEach( ( f, i ) => this.file_add( f, [ pos[0] + i*20, pos[1] + i*20 ] ) )
			} )()
		}

		@ $mol_mem
		keydown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keydown',
				$mol_wire_async( event => {

					if( event.key == 'Delete' ) {

						if( input_focused() ) return
						
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
				$mol_wire_async( ( event: KeyboardEvent )=> {

					if( event.key == 'Shift' ) {
						this.shift_pressed( false )
					}

					else if( event.code == 'KeyC' && event.ctrlKey ) {

						if( input_focused() ) return
						
						const refs = this.selected_refs()
						const blocks = refs.map( r => this.block_by_ref( r ) )
						const serialized = this.board().serialize_blocks( blocks )

						navigator.clipboard.writeText( JSON.stringify( serialized ) )

					}

				} ),
			)
		}

		deserialize_below_pointer( dto: ReturnType< $shm_hitalama_board["serialize"] > ) {
			const pointer_pos = this.get_pointer_pos()

			let left = Infinity
			let top = Infinity
			
			let right = -Infinity
			let bottom = -Infinity

			dto.blocks?.forEach( b => {
				left = Math.min( left, b.body_x! + b.left_edge_x! )
				top = Math.min( top, b.body_y! + b.top_edge_y! )

				right = Math.max( right, b.body_x! + b.right_edge_x! )
				bottom = Math.max( bottom, b.body_y! + b.bottom_edge_y! )
			} )

			const width = right - left
			const height = bottom - top
			
			const offset_x = pointer_pos[0] - left - width/2
			const offset_y = pointer_pos[1] - top - height/2

			const dto_translated = {
				...dto,
				blocks: dto.blocks?.map( b => {
					return {
						...b,
						body_x: b.body_x! + offset_x,
						body_y: b.body_y! + offset_y,
					}
				} )
			}

			this.board().deserialize( dto_translated )
		}

		@ $mol_mem
		paste_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'paste',
				$mol_wire_async( event => {

					if( input_focused() ) return

					const items = ( event.clipboardData || event.originalEvent.clipboardData ).items
					for( let index in items ) {
						const item = items[ index ]
						if( item.type === 'text/plain' ) {
							item.getAsString( ( str: string) => {

								try {
									const dto = JSON.parse( str )
									$mol_wire_async( this ).deserialize_below_pointer( dto )
								} catch (error) {
									$mol_wire_async( this ).paste_text( str )
								}

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

	function input_focused() {
		return ['INPUT', 'TEXTAREA'].includes( $mol_view_selection.focused()[0].nodeName )
	}

	function is_panning( start: PointerEvent, end: PointerEvent ) {

		if( end.timeStamp - start?.timeStamp > 500
			|| Math.abs(end.x - start?.x) > 10
			|| Math.abs(end.y - start?.y) > 10
		) return true

		return false

	}

}
