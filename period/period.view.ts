namespace $.$$ {
	export class $shm_hitalama_period extends $.$shm_hitalama_period {

		@ $mol_mem
		date_from( next?: string ): string {
			return this.period( next ? {from: next, to: this.date_to()} : undefined ).from ?? ''
		}

		@ $mol_mem
		date_to( next?: string ): string {
			return this.period( next ? {to: next, from: this.date_from()} : undefined ).to ?? ''
		}
		
		@ $mol_mem
		period_str( next?: string ): string {
			if( next === '' ) {
				this.clear()
				return ''
			}
			if( next ) {
				const [from, to] = next.split('-')
				this.period( {from, to} )
				return next
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
