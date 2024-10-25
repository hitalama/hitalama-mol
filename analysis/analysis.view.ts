namespace $.$$ {

	export class $shm_hitalama_analysis extends $.$shm_hitalama_analysis {
		
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
			return this.token_str() ? super.group_body() : [ this.No_auth_message() ]
		}

		@ $mol_mem
		list_view() {
			return this.selected_list_ref() ? super.list_view() : []
		}

		@ $mol_mem
		selected_list_ref( next?: string ) {
			if( next ) this.search_reset()
			return next ?? ''
		}

		cancel_select_list() {
			this.selected_list_ref( '' )
		}

		@ $mol_mem
		analysis() {
			// console.log('this.posts_dto_by_owner( this.search_owner_id() )', this.posts_dto_by_owner( this.search_owner_id() ))
			if( this.search_owner_id() ) {
				return this.posts_pending( this.search_owner_id() ) ? [ this.Loaders() ]
					: this.posts_dto_by_owner( this.search_owner_id() ) ? super.analysis()  : []
			}

			if( !this.selected_list_ref() ) return []

			const list = this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( this.selected_list_ref() ), $shm_hitalama_list ) 
			return []

		}

		@ $mol_mem
		lists_dict() {
			const lists = this.profile()?.Groups_lists()?.remote_list() ?? []
			const dict = Object.fromEntries( lists.map( l => 
				[ l.ref().description, l.Name()?.val()! ]
			) )
			console.log('dict', dict)
			return dict
		}

		@ $mol_mem
		selected_list() {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( this.selected_list_ref() ), $shm_hitalama_list )
		}

		@ $mol_mem
		selected_list_name() {
			return this.selected_list().Name()?.val() ?? ''
		}

		owner_id( id: string ) {
			return id
		}

		search_collect() {
			console.log('this.search_owner_id()', this.search_owner_id())
			this.collect( this.search_owner_id() )
		}

		@ $mol_mem
		summary_group() {
			const group = this.$.$hyoo_crus_glob.land_grab( {} ).Data( $shm_hitalama_group )
			group.fill( this.search_dto()! )
			return group
		}

	}

}
