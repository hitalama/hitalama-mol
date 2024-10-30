namespace $.$$ {

	export class $shm_hitalama_lists_creating extends $.$shm_hitalama_lists_creating {
		
		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		cancel_arg() {
			return { [this.param()]: null }
		}

		groups_map: Map< string, $shm_hitalama_group_dto > = new Map
		@ $mol_mem
		add() {
			const owner_id = this.group_dto_current()!.id
			this.groups_map.set( owner_id, this.group_dto_current()! )

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
			return this.groups_map.get( id )?.photo_50 ?? ''
		}

		@ $mol_mem
		save_enabled() {
			return this.groups_list().length > 0
		}

		@ $mol_action
		save() {
			const list = this.$.$shm_hitalama_profile.current()?.Groups_lists(null)?.make( {} )
			list?.Name(null)?.val( this.name() )

			this.groups_list().forEach( id => {
				const group = list?.Groups(null)?.make( list.land() )!
				group.fill( this.groups_map.get( id )! )
			} )

			this.$.$mol_state_arg.value( this.param(), null )
		}
		
	}

}
