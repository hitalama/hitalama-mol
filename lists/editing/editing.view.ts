namespace $.$$ {

	export class $shm_hitalama_lists_editing extends $.$shm_hitalama_lists_editing {
		
		@ $mol_mem
		name( next?: string ): string {
			return next ?? this.list().Name()?.val() ?? ''
		}

		groups_map: Map< string, $shm_hitalama_group_dto > = new Map
		@ $mol_mem
		groups_list( next?: string[] ) {
			if( next === undefined ) {
				return this.list().Groups()?.remote_list()?.map( l => {
					const owner_id = l.Owner_id()?.val()!
					this.groups_map.set( owner_id, {
						id: owner_id.slice(1),
						name: l.Name()?.val()!,
						members_count: l.Members_count()?.val()!,
						photo_50: l.Photo_url()?.val()!,
					} )
					return owner_id
				} ) ?? []
			}
			return next ?? []
		}

		@ $mol_action
		save() {
			const list = this.list()
			list?.Name(null)?.val( this.name() )

			const next_groups = this.groups_list().map( id => {
				const dto = this.groups_map.get( id )
				const group = this.list()?.Groups(null)?.make( this.list().land() )!
				group.fill( dto! )
				return group
			} )
			this.list()?.Groups(null)?.remote_list( next_groups )

			this.$.$mol_state_arg.value( this.param(), null )
		}

	}
	
}
