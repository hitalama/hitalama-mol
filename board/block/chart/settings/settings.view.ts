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

		axis_details_visible() {
			return this.axis() == 'Дата' ? super.axis_details_visible() : []
		}

		@ $mol_mem
		axis_details( next?: string ): string {
			return this.chart().date_axis_details( this.axis(), next )
		}
		
	}
}
