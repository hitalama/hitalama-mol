namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		res() {
			const src = 'https://api.vk.com/method/execute?access_token=' +
				// this.token() +
				'&code=return API.groups.getById({"group_id":"smmblog"});&v=5.131&callback=' +
				'shm_hitalama_app.Root(0).cb'
			$mol_import.script(src)
		}

		res_str(): string {
			return JSON.stringify( this.cb() )
		}

		token_str() {
			return this.token()?.Token()?.val() || ''
		}
		
	}

	export const shm_hitalama_app = $shm_hitalama_app

}
