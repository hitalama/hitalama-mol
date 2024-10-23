namespace $.$$ {

	export class $shm_hitalama_lists_creating extends $.$shm_hitalama_lists_creating {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		cancel_arg() {
			return { [this.param()]: null }
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

			if( this.groups_list().includes( owner_id ) ) return
			
			this.groups_list( [ ... this.groups_list(), owner_id ] )
		}

		remove( id: string ) {
			this.groups_list( [ ... this.groups_list().filter( i => i != id ) ] )
		}

		@ $mol_mem
		groups() {
			return this.groups_list().map( id => this.Group( id ) )
		}

		@ $mol_mem_key
		photo_uri( id: string ) {
			return this.groups_map.get( id )?.photo_uri ?? ''
		}

		@ $mol_mem
		save_enabled() {
			return this.groups_list().length > 0
		}

		@ $mol_action
		save() {
			const list = this.profile()?.Groups_lists(null)?.make( {} )
			list?.Name(null)?.val( this.name() )

			this.groups_list().forEach( id => {
				const data = this.groups_map.get( id )

				const group = list?.Groups(null)?.make( list.land() )!

				group.Name(null)?.val( data?.name )
				group.Owner_id(null)?.val( data?.owner_id )
				group.Photo_url(null)?.val( data?.photo_uri )
				group.Members_count(null)?.val( data?.members_count )
			} )

			this.$.$mol_state_arg.value( this.param(), null )
		}
		
	}

}
