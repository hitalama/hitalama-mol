namespace $.$$ {
	
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
			// block?.title( blocks[0].name )
			return block
		}

		@ $mol_action
		block_cut( ref: $hyoo_crus_ref ) {
			this.dashboard().Blocks(null)?.cut( ref )
		}

		@ $mol_mem_key
		block( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_dashboard_block )
		}

		@ $mol_mem
		blocks() {
			return this.dashboard().Blocks()?.remote_list().map( f => this.Block( f.ref() ) ) ?? []
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
			return next ?? false
		}

		// click( id: any, next?: any ) {
		// 	const current = this.selected_ref()
		// 	if( current ) this.selected( current, false )
		// 	this.selected_ref( id )
		// }

	}

}
