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
		body() {
			return this.token_str() ? super.group_body() : [ this.No_auth_message() ]
		}

		@ $mol_mem
		analysis() {
			console.log('this.posts_dto_by_owner( this.search_owner_id() )', this.posts_dto_by_owner( this.search_owner_id() ))
			return this.posts_pending( this.search_owner_id() ) ? [ this.Loaders() ]
				: this.posts_dto_by_owner( this.search_owner_id() ) ? super.analysis()  : []
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
