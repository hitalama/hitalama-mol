namespace $.$$ {

	export class $shm_hitalama_group_analysis extends $.$shm_hitalama_group_analysis {
		
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
		search_result( next?: any ) {
			return $mol_state_local.value( `${ this }.search_result()`, next )
		}

		@ $mol_mem
		members_count(): string {
			return this.search_result()?.response?.[0].members_count ?? ''
		}

		@ $mol_mem
		group_name(): string {
			return this.search_result()?.response?.[0].name ?? ''
		}

		@ $mol_mem
		group_id(): string {
			return this.search_result()?.response?.[0].id ?? ''
		}

		@ $mol_mem
		owner_id(): string {
			return this.group_id() ? '-' + this.group_id() : ''
		}

		@ $mol_mem
		group_photo_uri() {
			return this.search_result()?.response?.[0].photo_50 ?? ''
		}

		@ $mol_mem
		error_message() {
			return this.search_result()?.error?.error_msg ?? ''
		}

		@ $mol_action
		search() {
			const group_id = this.group().replace( /http\w*:\/\/vk\.(com|ru)\//, '' )
			
			const code = 'return API.groups.getById({"group_id":"'+ group_id +'","fields":"members_count"});'
			$shm_hitalama_jsonp.vk_execute( this.token_str(), code, this.search_result.bind(this) )
		}
		
		@ $mol_mem
		search_result_view(): readonly ( any )[] {
			return this.search_result()?.response?.[0]
				? super.search_result_view() 
				: this.search_result()?.error
					? [ this.Search_error() ] : []
		}

		@ $mol_mem
		spreads_visible() {
			return this.group_id() ? super.spreads_visible() : {}
		}
		
	}

}
