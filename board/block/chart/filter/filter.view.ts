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
		
		field(): string {
			return this.block().text()
		}

		@ $mol_mem
		filter_options(): readonly ( any )[] {
			return this.chart().filter_options( this.field() )
		}

		@ $mol_mem
		filter_options_checked( next?: string[] ) {
			return this.chart().filter_options_checked( this.field(), next )
		}
		
	}
}
