namespace $ {

	export class $shm_hitalama_jsonp extends $mol_object {

		@ $mol_action
		static _guid() {
			return $mol_guid()
		}

		@ $mol_action
		static vk_execute( token: string, code: string, cb: any, ...args: any ) {

			const cb_name = 'jsonp_callback_' + this._guid()
			
			;($mol_dom_context as any)[ cb_name ] = ( res: any )=> {
				cb( res, ...args )
				delete ($mol_dom_context as any)[ cb_name ]
			};

			const src = 'https://api.vk.com/method/execute?access_token=' + token +
				'&code=' + code + '&v=5.131&callback=' + cb_name

			$mol_import.script(src)

		}
		
	}

}
