namespace $.$$ {

	export class $shm_hitalama_contextmenu extends $.$shm_hitalama_contextmenu {
		
		pointerenter( next?: any ) {
			this.hovered( true )
		}

		pointerleave( next?: any ) {
			this.hovered( false )
		}

		@ $mol_mem
		left(): string {
			return this.pos()[0] + 'px'
		}
		
		@ $mol_mem
		top(): string {
			return this.pos()[1] + 'px'
		}
		
		@ $mol_mem
		pointerdown_listener() {
			return new $mol_dom_listener(
				this.$.$mol_dom_context.document,
				'pointerdown',
				$mol_wire_async( event => {
					if( !this.hovered() ) this.showed( false )
				} ),
			)
		}

		@ $mol_action
		show( pos: [number, number] ) {
			this.pos( pos )
			this.showed( true )
		}
		
	}

}
