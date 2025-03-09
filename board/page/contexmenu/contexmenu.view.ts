namespace $.$$ {
	export class $shm_hitalama_board_page_contexmenu extends $.$shm_hitalama_board_page_contexmenu {
		
		@ $mol_action
		text_add() {
			this.contextmenu_showed( false )
			const block = this.board().text_add( this.contextmenu_real_pos() )
			return block
		}

		@ $mol_action
		input_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'input', this.contextmenu_real_pos() )
			block?.text( 'Hello' )
			return block
		}

		@ $mol_action
		iframe_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'iframe', this.contextmenu_real_pos(), 500, 700 )
			block?.text( 'https://www.google.com/search?igu=1' )
			return block
		}

		@ $mol_action
		range_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'range', this.contextmenu_real_pos() )
			return block
		}

		@ $mol_action
		guid_sync() {
			return $mol_guid()
		}

		@ $mol_action
		form_add() {
			this.contextmenu_showed( false )

			const form_pos = this.contextmenu_real_pos()
			const form = this.board().block_add( 'form', form_pos, 450, 780 )
			
			const table_pos = [ form_pos[0] + 460, form_pos[1]] as const
			const block_table = this.board().table_novirt_add( table_pos, 1000, 780 )!
			block_table.table_head( [ 'Запрос', 'Минус', 'Период', 'Страна', 'Язык', 'Соц.медиа', 'СМИ', 'Type', 'Tags', 'Category', '', '' ] )
			block_table.table_col_types( [ 'any', 'any', 'any', 'any', 'any', 'file', 'file', 'any', 'any', 'any', 'action_edit', 'action_delete' ] )
			const rows_method = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_search_statistics_rows.js' ) )
			block_table.Table(null)?.ensure( block_table.land() )?.Rows_method(null)?.val( rows_method )

			const code_pos = [ form_pos[0], form_pos[1] + 790 ] as const
			const code = this.board().block_add( 'code', code_pos, 1220, 680 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_table.js' ) )
				.replace( 'BLOCK_TITLE', `'${ 'Table_' + this.guid_sync() }'` )
			code?.text( code_str )
		}

		@ $mol_action
		deckgl_example_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'customdom', this.contextmenu_real_pos(), 700, 700 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_deckgl_example.js' ) )
			block?.text( code_str )
			return block
		}

		@ $mol_action
		echarts_example_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'customdom', this.contextmenu_real_pos(), 700, 500 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_echarts_example.js' ) )
			block?.text( code_str )
			return block
		}

		@ $mol_action
		code_css_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'code_css', this.contextmenu_real_pos(), 600, 300 )
			const code_str = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_css_example.css' ) )
			block?.text( code_str )
			return block
		}

		@ $mol_action
		code_js_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'code', this.contextmenu_real_pos(), 600, 300 )
			block?.text( '' )
			return block
		}

		@ $mol_action
		code_sql_add() {
			this.contextmenu_showed( false )
			const block = this.board().block_add( 'code_sql', this.contextmenu_real_pos(), 600, 300 )
			block?.text( 'return to_table( result )' )
			block?.subtext( 'SELECT * FROM pg_views' )
			return block
		}

		@ $mol_action
		get_custom_guid() {
			return $mol_guid(12).replace(/[0-9]/g, '').toLowerCase()
		}
		
		@ $mol_action
		customizer_add() {
			this.contextmenu_showed( false )

			const board = this.board()
			const block = board.block_add( 'customizer', this.contextmenu_real_pos(), 1200, 600 )
			const custom = board.Customs(null)?.make( board.land() )

			block?.Custom(null)?.remote( custom )

			
			const type_custom = 'widget_ba_messagecount_' + this.get_custom_guid()
			custom?.title( 'BA messagecount' )
			// custom?.title( type_custom )
			
			const code_js = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_widget_ba_messagecount.js' ) )
				.replaceAll( 'widget_ba_messagecount', type_custom )
			custom?.Code_js(null)?.value( code_js )

			const code_view_tree = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_widget_ba_messagecount.view.tree' ) )
				.replace( 'widget_ba_messagecount', type_custom )

			custom?.Code_view_tree(null)?.value( code_view_tree )

			const code_css = this.$.$mol_fetch.text( $shm_hitalama_app_ghpages_fix_link( '/shm/hitalama/board/snippets/_widget_ba_messagecount.view.css' ) )
				.replaceAll( 'widget_ba_messagecount', type_custom )
			custom?.Code_css(null)?.value( code_css )
		}

		@ $mol_action
		form_custom_add() {
			this.contextmenu_showed( false )
			
			const [x, y] = this.contextmenu_real_pos()
			const field_names = [ 'Запрос', 'Дата #date', 'Период #period', 'Файл #file'] 
			const text = this.board().text_add( [x-200, y], field_names.join('\n') )

			const form = this.board().block_add( 'form_custom', [x, y], 300, 600 )
			const custom = form?.Form_custom(null)?.ensure( form.land() )
			custom?.Use_text_from(null)?.remote( text )
			
			const block_table = this.board().block_add( 'table', [x+300, y], 1000, 780 )!
			const table = block_table.Table(null)?.ensure( block_table.land() )
			table?.Form_custom(null)?.remote( custom )
			
			return form
		}

		customs() {
			const visible = this.board().Customs()?.remote_list().filter( c => c.Visible_in_contextmenu()?.val() )
			return visible?.map( c => this.Custom_add( c.ref() ) ) ?? []
		}

		custom_add_title( ref: $hyoo_crus_ref ) {
			const custom = $hyoo_crus_glob.Node( ref, $shm_hitalama_board_custom )
			return super.custom_add_title(0).replace( '{title}', custom.title() )
		}

		custom_add( ref: $hyoo_crus_ref ) {
			const custom = $hyoo_crus_glob.Node( ref, $shm_hitalama_board_custom )

			const block = this.board().block_add( 'custom', this.contextmenu_real_pos() )
			block?.Type_custom(null)?.remote( custom )

			this.contextmenu_showed( false )
		}
		
	}
}
