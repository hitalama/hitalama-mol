namespace $.$$ {

	$$.$mol_text_code_row.prototype.minimal_height = ()=> 0
	
	export class $shm_hitalama_dashboard_page extends $.$shm_hitalama_dashboard_page {

		@ $mol_mem
		dashboard(): $shm_hitalama_dashboard {
			return this.entity().cast( $shm_hitalama_dashboard )
		}
		
		@ $mol_action
		dashboard_cut() {
			$shm_hitalama_profile.current()?.Dashboards()?.cut( this.dashboard().ref() )
		}

		@ $mol_action
		block_add() {
			const block = this.dashboard().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Text(null)?.value( 'text' )
			return block
		}

		@ $mol_action
		block_delete( ref: $hyoo_crus_ref ) {
			this.dashboard().Blocks(null)?.cut( ref )
		}

		@ $mol_action
		block_to_top( ref: $hyoo_crus_ref ) {
			const pos = this.pos_by_ref.get( ref.description! )!
			this.dashboard().Blocks(null)?.move( pos, this.dashboard().Blocks(null)?.remote_list().length! )
		}

		@ $mol_action
		block_to_bottom( ref: $hyoo_crus_ref ) {
			const pos = this.pos_by_ref.get( ref.description! )!
			this.dashboard().Blocks(null)?.move( pos, 0 )
		}

		@ $mol_mem_key
		block( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_dashboard_block )
		}

		pos_by_ref: Map< string, number > = new Map
		@ $mol_mem
		blocks() {
			return this.dashboard().Blocks()?.remote_list().map( (f, i) => {
				this.pos_by_ref.set( f.ref().description!, i )
				return this.Block( f.ref() )
			} ) ?? []
		}

		@ $mol_mem
		blocks_clear() {
			this.dashboard().Blocks()?.remote_list( [] )
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
			const blocks = this.dashboard().Blocks()?.remote_list() ?? []
			const sticks = [ ...super.sticks_x( ref ) ]
			blocks.forEach( b => {
				if( b.ref() != ref ) sticks.push( ...this.sticks_x_by_block( b.ref() ) )
			} )
			return sticks
		}

		@ $mol_mem_key
		sticks_y( ref: $hyoo_crus_ref ) {
			const blocks = this.dashboard().Blocks()?.remote_list() ?? []
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

		deselect_all() {
			const blocks = this.dashboard().Blocks()?.remote_list() ?? []
			blocks.forEach( b => this.selected( b.ref(), false ) )
		}

		@ $mol_mem
		keydown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'keydown',
				$mol_wire_async( event => {
					if( event.key == 'Delete' ) {
						const ref = this.selected_ref()
						if( !ref || this.editable( ref ) ) return
						this.block_delete( ref )
					}
				} ),
			)
		}

		@ $mol_action
		text_add( text: string ) {
			const block = this.dashboard().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Text(null)?.value( text )
			return block
		}

		@ $mol_action
		image_add( blob: Blob ) {
			const block = this.dashboard().Blocks(null)?.make( {'': $hyoo_crus_rank.get} )
			block?.Image(null)?.blob( blob )
			return block
		}

		@ $mol_mem
		paste_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'paste',
				$mol_wire_async( event => {
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
