namespace $ {

	export function $shm_hitalama_web_hidden (
		event : $mol_log3_event<{}> ,
	) {

		const place_name = (event.place as any)?.toString()
		if( place_name?.startsWith( '$' + 'hyoo_crus_glob' ) ) return true
		if( place_name?.startsWith( '$' + 'mol_wire' ) ) return true

		return false

	}

	export function $shm_hitalama_web_make(
		level : $mol_type_keys_extract< Console, Function >,
		color : string,
	) {

		return function $mol_log3_logger(
			this : $ ,
			event : $mol_log3_event<{}> ,
		) {

			if( color != 'orangered' && $shm_hitalama_web_hidden( event ) ) return ()=> {}

			const pending = this.$mol_log3_stack.pop()
			if( pending ) pending()

			let tpl = '%c'
			const chunks = Object.values( event )

			for( let i = 0 ; i < chunks.length ; ++i ) {
				tpl += ( typeof chunks[i] === 'string' ) ? ' ▫ %s' : ' ▫ %o'
			}
	
			const style = `color:${color};font-weight:bolder`

			;( this.console[ level ] as any )( tpl , style , ... chunks )

			const self = this
			return ()=> self.console.groupEnd()

		}

	}

	$.$mol_log3_come = $shm_hitalama_web_make( 'info' , 'royalblue' )
	$.$mol_log3_done = $shm_hitalama_web_make( 'info' , 'forestgreen' )
	$.$mol_log3_fail = $shm_hitalama_web_make( 'error' , 'orangered' )
	$.$mol_log3_warn = $shm_hitalama_web_make( 'warn' , 'goldenrod' )
	$.$mol_log3_rise = $shm_hitalama_web_make( 'log' , 'magenta' )
	$.$mol_log3_area = $shm_hitalama_web_make( 'group' , 'cyan' )

}
