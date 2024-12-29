namespace $.$$ {
	
	export class $shm_hitalama_check_list extends $.$shm_hitalama_check_list {
		
		checks() {
			return this.options().map( t => this.Check( t ) )
		}

		check_title( id: any ): string {
			return id
		}

		checked( id: any, next?: boolean ): boolean {

			const val = this.value() ?? []
			if( next === undefined ) return val?.includes( id )

			const val_next = next
				? val?.includes( id ) ? val : [ ...val, id ]
				: val.filter( title => title != id )

			this.value( val_next )
			return next
			
		}
		
	}

}
