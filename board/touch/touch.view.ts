namespace $.$$ {
	export class $shm_hitalama_board_touch extends $.$shm_hitalama_board_touch {
		
		event_wheel( event: WheelEvent ) {
			if( !this.allow_zoom() ) return
			return super.event_wheel( event )
		}
		
		event_start( event: PointerEvent ) {
			if( event.button != 2 ) return
			return super.event_start( event )
		}
		
	}
}
