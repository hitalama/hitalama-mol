namespace $.$$ {

	export class $shm_hitalama_app extends $.$shm_hitalama_app {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem
		body() {
			return this.token_str() ? super.body() : this.body_noauth()
		}

		@ $mol_mem
		result( next?: any ) {
			if( next === undefined ) return null

			const data = next.response[0]

			this.group_name( data.name )
			this.members_count( data.members_count )
			this.group_photo_uri( data.photo_50 )

			return next ?? null
		}

		@ $mol_action
		search() {
			const group_id = this.group().replace( /http\w*:\/\/vk\.(com|ru)\//, '' )
			console.log('group_id', group_id)
			
			const code = 'return API.groups.getById({"group_id":"'+ group_id +'","fields":"members_count"});'
			$shm_hitalama_jsonp.vk_execute( this.token_str(), code, this.result.bind(this) )
		}
		
		@ $mol_mem
		search_result(): readonly ( any )[] {
			return this.result() ? super.search_result() : []
		}
		
	}

}
