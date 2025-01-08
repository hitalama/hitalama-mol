namespace $.$$ {

	export class $shm_hitalama_board_block_chart extends $.$shm_hitalama_board_block_chart {
		
		@ $mol_mem
		chart() {
			return this.block().Chart(null)!
		}

		names(): string[] {
			return [ ...this.traversed().by_group.keys() ]
		}

		@ $mol_mem_key
		series_y( group_name: any ): readonly ( any )[] {
			const labels = this.labels()

			const by_label = this.traversed().by_group.get( group_name )

			return labels.map( l => Number( by_label?.get( l ) ) )
		}

		labels(): readonly ( string )[] {
			return [...this.traversed().labels]
		}

		@ $mol_mem
		traversed() {
			return this.chart().traversed()
		}
		
		@ $mol_action
		settings_add() {
			const left = this.left() + this.width()
			const top = this.top()

			const settings = this.board().block_add( 'chart_settings', [ left, top ], 180, 290 )
			settings?.Use_chart_from(null)?.remote( this.block() )

			this.Board_page().contextmenu_showed( false )
		}

		@ $mol_action
		filter_add( name: string ) {
			const pos = this.Board_page().get_pointer_pos()

			const block = this.board().block_add( 'chart_filter', pos, 180, 290 )
			block?.text( name )
			block?.Use_chart_from(null)?.remote( this.block() )

			this.Board_page().contextmenu_showed( false )
		}

		filter_buttons() {
			return this.chart().table_head().map( name => this.Filter_add( name ) )
		}

		filter_name( id: any ): string {
			return id
		}

	}

}
