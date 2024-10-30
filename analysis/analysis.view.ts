namespace $.$$ {

	export class $shm_hitalama_analysis extends $.$shm_hitalama_analysis {
		
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
		owner_ids() {
			const list = this.selected_list()
			if( !list ) return [ this.search_owner_id() ]
			return list.Groups()?.remote_list().map( g => g.Owner_id()?.val()! ) ?? []
		}

		@ $mol_mem
		analysis() {
			// console.log('this.posts_dto_by_owner( this.search_owner_id() )', this.posts_dto_by_owner( this.search_owner_id() ))
			if( this.search_owner_id() ) {
				return this.posts_pending( this.search_owner_id() ) ? [ this.Loaders() ]
					: this.posts_dto_by_owner( this.search_owner_id() ) ? super.analysis()  : []
			}

			const list = this.selected_list()
			if( !list ) return []

			const pending = list.Groups()?.remote_list().forEach( g => {
				this.posts_pending( g.Owner_id()?.val() )
			} )

			return pending ? [ this.Loaders() ] : super.analysis()
		}

		@ $mol_mem
		lists_dict() {
			const lists = this.$.$shm_hitalama_profile.current()?.Groups_lists()?.remote_list() ?? []
			const dict = Object.fromEntries( lists.map( l => 
				[ l.ref().description, l.Name()?.val()! ]
			) )
			return dict
		}

		@ $mol_mem
		selected_list() {
			return this.selected_list_ref() 
				? this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( this.selected_list_ref() ), $shm_hitalama_list )
				: null
		}

		@ $mol_mem
		selected_list_name() {
			return this.selected_list()?.Name()?.val() ?? ''
		}

		owner_id( id: string ) {
			return id
		}

		@ $mol_mem
		collect_pending(): boolean {
			return this.collect_queue().length > 0 || this.owner_ids().some( id => this.posts_pending( id ) )
		}

		collect_button(): readonly ( any )[] {
			return this.collect_pending() ? [ this.Cancel() ] : [ this.Collect() ]
		}
		
		collect_interval = 340
		@ $mol_mem
		auto_collect() {
			if( this.collect_queue().length == 0 ) return
			this.queue_eat()
			$mol_state_time.now( this.collect_interval )
		}

		@ $mol_action
		queue_eat() {
			const [ owner, ...next ] = this.collect_queue()
			this.collect_by_owner( owner )
			this.collect_queue( next )
		}

		collect() {
			this.collect_queue( this.owner_ids() )
			this.queue_eat()
		}

		collect_cancel() {
			this.collect_queue( [] )
		}

		summary_groups() {
			const list = this.selected_list()
			if( !list ) {
				const group = this.$.$hyoo_crus_glob.land_grab( {} ).Data( $shm_hitalama_group )
				group.fill( this.search_dto()! )
				return [ group ]
			}

			return list.Groups()?.remote_list() ?? []
		}

		@ $mol_mem_key
		group_name( owner_id: string ) {
			const list = this.selected_list()
			if( !list ) return ''

			return list.Groups()?.remote_list()?.find( g => g.Owner_id()?.val() == owner_id )?.Name()?.val() || ''
		}

	}

}
