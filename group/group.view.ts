namespace $.$$ {

	export class $shm_hitalama_group extends $.$shm_hitalama_group {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem
		group_body() {
			return this.token_str() ? super.group_body() : this.group_body_noauth()
		}

		@ $mol_mem
		group_data( next?: any ) {
			if( next === undefined ) return null

			const data = next.response[0]

			this.group_id( data.id )
			this.owner_id( '-'+data.id )
			this.group_name( data.name )
			this.members_count( data.members_count )
			this.group_photo_uri( data.photo_50 )

			return next
		}

		@ $mol_action
		search() {
			const group_id = this.group().replace( /http\w*:\/\/vk\.(com|ru)\//, '' )
			
			const code = 'return API.groups.getById({"group_id":"'+ group_id +'","fields":"members_count"});'
			$shm_hitalama_jsonp.vk_execute( this.token_str(), code, this.group_data.bind(this) )
		}
		
		@ $mol_mem
		search_result(): readonly ( any )[] {
			return this.group_data() ? super.search_result() : []
		}

		@ $mol_mem
		spreads_visible() {
			return this.group_id() ? super.spreads_visible() : {}
		}
		
	}

}
