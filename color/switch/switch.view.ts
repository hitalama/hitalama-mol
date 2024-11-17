namespace $.$$ {

	export class $shm_hitalama_color_switch extends $.$shm_hitalama_color_switch {
		
		options() {
			return Object.fromEntries( this.colors().map( c => [c,c] ) )
		}

		color( id: string ) {
			return id
		}
		
	}
	
}
