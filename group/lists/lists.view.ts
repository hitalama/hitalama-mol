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

		groups_map: Map< string, { owner_id: string, name: string, photo_uri: string } > = new Map
		@ $mol_mem
		add() {
			const owner_id = this.owner_id_current()
			this.groups_map.set( owner_id, { 
				owner_id,
				name: this.name_current(),
				photo_uri: this.photo_uri_current(),
			} )

			this.creating_list( [ ... this.creating_list(), owner_id ] )
		}

		@ $mol_mem
		groups() {
			return this.creating_list().map( id => this.Group( id ) )
		}

		@ $mol_mem_key
		photo_uri( id: string ) {
			return this.groups_map.get( id )?.photo_uri ?? ''
		}
		
	}

}
