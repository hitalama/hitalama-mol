namespace $.$$ {

	export class $shm_hitalama_lists_editing extends $.$shm_hitalama_lists_editing {
		
		@ $mol_mem
		name( next?: string ): string {
			return next ?? this.list().Name()?.val() ?? ''
		}

		groups_map: Map< string, { owner_id: string, name: string, photo_uri: string, members_count: number } > = new Map
		@ $mol_mem
		groups_list( next?: string[] ) {
			if( next === undefined ) {
				return this.list().Groups()?.remote_list()?.map( l => {
					const owner_id = l.Owner_id()?.val()!
					this.groups_map.set( owner_id, {
						owner_id,
						name: l.Name()?.val()!,
						members_count: l.Members_count()?.val()!,
						photo_uri: l.Photo_url()?.val()!,
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
				const data = this.groups_map.get( id )

				const group = this.list()?.Groups(null)?.make( this.list().land() )!

				group.Name(null)?.val( data?.name )
				group.Owner_id(null)?.val( data?.owner_id )
				group.Photo_url(null)?.val( data?.photo_uri )
				group.Members_count(null)?.val( data?.members_count )

				return group
			} )
			this.list()?.Groups(null)?.remote_list( next_groups )

			this.$.$mol_state_arg.value( this.param(), null )
		}

	}
	
}
