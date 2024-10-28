namespace $ {

	export class $shm_hitalama_jsonp extends $mol_object {

		@ $mol_action
		static _guid() {
			return $mol_guid()
		}

		@ $mol_action
		static make_cb( cb: any, ...args: any ) {
			const cb_name = 'jsonp_callback_' + this._guid()
			
			;($mol_dom_context as any)[ cb_name ] = ( res: any )=> {
				cb( res, ...args )
				delete ($mol_dom_context as any)[ cb_name ]
			};

			return cb_name
		}

		@ $mol_action
		static vk_method( method: string, params: Record< string, string >, cb: any, ...args: any ) {
			const url_params = new URLSearchParams( params )
			const src = 'https://api.vk.com/method/' + method + '?' + url_params.toString() + '&callback=' + this.make_cb( cb, ...args )
			$mol_wire_async($mol_import).script(src)
		}

		@ $mol_action
		static vk_execute( access_token: string, code: string, cb: any, ...args: any ) {
			this.vk_method( 'execute', { access_token, code, v: '5.131' }, cb, ...args )
		}

		@ $mol_action
		static vk_newFuncWall( params: { access_token: string, owner_id: string, offset: string, count_execute: string }, cb: any, ...args: any ) {
			this.vk_method( 'execute.newFuncWall', { ... params, hm_version: '24157', v: '5.130', timout: '60e3' }, cb, ...args )
		}
		
	}

}
