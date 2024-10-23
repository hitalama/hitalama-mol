namespace $.$$ {

	export class $shm_hitalama_group_lists extends $.$shm_hitalama_group_lists {
		
		@ $mol_mem
		current_view() {
			return this.$.$mol_state_arg.value( 'create' ) ? this.Creating() : this.Main()
		}
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		groups_map: Map< string, { owner_id: string, name: string, photo_uri: string, members_count: number } > = new Map
		@ $mol_mem
		add() {
			const owner_id = this.owner_id_current()
			this.groups_map.set( owner_id, { 
				owner_id,
				name: this.name_current(),
				photo_uri: this.photo_uri_current(),
				members_count: Number( this.members_count_current() ),
			} )

			this.creating_list( [ ... this.creating_list(), owner_id ] )
		}

		remove( id: string ) {
			this.creating_list( [ ... this.creating_list().filter( i => i != id ) ] )
		}

		@ $mol_mem
		groups() {
			return this.creating_list().map( id => this.Group( id ) )
		}

		@ $mol_mem_key
		photo_uri( id: string ) {
			return this.groups_map.get( id )?.photo_uri ?? ''
		}

		@ $mol_mem
		save_enabled() {
			return this.creating_list().length > 0
		}

		save() {
			const list = this.profile()?.Groups_lists(null)?.make( {} )
			list?.Name(null)?.val( this.name() )

			this.creating_list().forEach( id => {
				const data = this.groups_map.get( id )

				const group = list?.Groups(null)?.make( list.land() )!

				group.Name(null)?.val( data?.name )
				group.Owner_id(null)?.val( data?.owner_id )
				group.Photo_url(null)?.val( data?.photo_uri )
				group.Members_count(null)?.val( data?.members_count )
			} )

			this.$.$mol_state_arg.value( 'create', null )
		}
		
	}

}
