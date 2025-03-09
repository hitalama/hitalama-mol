namespace $.$$ {
	export class $shm_hitalama_period extends $.$shm_hitalama_period {
		
		@ $mol_mem
		period_str( next?: string ): string {
			if( next === '' ) {
				this.clear()
				return ''
			}
			const from = this.date_from()
			const to = this.date_to()
			return (from && to) ? from + ' – ' + to : ''
		}

		clear() {
			this.date_from('')
			this.date_to('')
		}
		
	}
}
