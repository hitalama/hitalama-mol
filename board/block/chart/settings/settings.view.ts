namespace $.$$ {
	export class $shm_hitalama_board_block_chart_settings extends $.$shm_hitalama_board_block_chart_settings {
		
		@ $mol_mem
		chart() {
			const block = this.block().Use_chart_from()?.remote()!
			return block.Chart()!
		}

		@ $mol_mem
		traversed() {
			return this.chart().traversed()
		}

		@ $mol_mem
		head() {
			return this.chart().table_head()
		}

		axis( next?: string ){
			return this.chart().axis( next )
		}

		values( next?: ( any )[] ): ( any )[] {
			return this.chart().values( next )
		}

		values_title( next?: string ) {
			return this.chart().values_title( next )
		}

		groups( next?: ( any )[] ): ( any )[] {
			return this.chart().groups( next )
		}

		@ $mol_mem
		filters_enabled( next?: string[] ) {
			return this.chart().filters_enabled( next )
		}

		// @ $mol_mem
		// filters() {
		// 	const enabled = this.block().Chart()?.Filters_enabled()?.val() ?? []
		// 	return enabled.map( t => this.Filter_content( t ) )
		// }

		filter_title( id: any ): string {
			return id
		}

		@ $mol_mem_key
		filter_options( id: any ): readonly ( any )[] {
			return [ ... this.traversed().field_options.get( id ) ?? [] ]
		}

		@ $mol_mem_key
		filter_options_checked( id: string, next?: string[] ) {
			return this.block().Chart()?.Filters_options(next)?.key( id, next )?.val( next ) ?? this.filter_options( id )
		}

		labels(): readonly ( string )[] {
			return [...this.traversed().labels]
		}
		
	}
}
