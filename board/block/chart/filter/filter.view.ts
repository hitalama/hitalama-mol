namespace $.$$ {
	export class $shm_hitalama_board_block_chart_filter extends $.$shm_hitalama_board_block_chart_filter {
		
		@ $mol_mem
		chart() {
			const block = this.block().Use_chart_from()?.remote()!
			return block.Chart()!
		}

		@ $mol_mem
		traversed() {
			return this.chart().traversed()
		}
		
		name(): string {
			return this.block().text()
		}

		@ $mol_mem
		filter_options(): readonly ( any )[] {
			return [ ... this.traversed().field_options.get( this.name() ) ?? [] ]
		}

		@ $mol_mem
		filter_options_checked( next?: string[] ) {
			const name = this.name()
			return this.chart()?.Filters_options(next)?.key( name, next )?.val( next ) ?? this.filter_options()
		}
		
	}
}
