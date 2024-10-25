namespace $.$$ {

	export class $shm_hitalama_group_search extends $.$shm_hitalama_group_search {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		search_result( next?: any ) {
			return next ?? null
		}

		@ $mol_action
		reset() {
			this.search_result( null )
		}
		
		@ $mol_mem
		dto(): $shm_hitalama_group_dto | null {
			return this.search_result()?.response?.[0] ?? null
		}

		@ $mol_mem
		members_count(): string {
			return String( this.dto()?.members_count ) ?? ''
		}

		@ $mol_mem
		name(): string {
			return this.dto()?.name ?? ''
		}

		@ $mol_mem
		group_id(): string {
			return this.dto()?.id ?? ''
		}

		@ $mol_mem
		photo_uri() {
			return this.dto()?.photo_50 ?? ''
		}

		@ $mol_mem
		owner_id(): string {
			return this.group_id() ? '-' + this.group_id() : ''
		}

		@ $mol_mem
		error_message() {
			return this.search_result()?.error?.error_msg ?? ''
		}

		@ $mol_action
		search() {
			const group_id = this.search_value().replace( /http\w*:\/\/vk\.(com|ru)\//, '' )
			
			const code = 'return API.groups.getById({"group_id":"'+ group_id +'","fields":"members_count"});'
			$shm_hitalama_jsonp.vk_execute( this.token_str(), code, this.search_result.bind(this) )

			this.search_click()
		}
		
		@ $mol_mem
		search_result_view(): readonly ( any )[] {
			return this.search_result()?.response?.[0]
				? super.search_result_view() 
				: this.search_result()?.error
					? [ this.Search_error() ] : []
		}
		
	}

}
