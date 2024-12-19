namespace $.$$ {

	export class $shm_hitalama_chart_line extends $.$shm_hitalama_chart_line {

		items(): readonly ( any )[] {
			return this.names().map( n => this.Item( n ) )
		}

		item_name( id: any ) {
			return id
		}

		dots() {
			return this.names().map( n => this.Dot( n ) )
		}
		
	}
	
}
