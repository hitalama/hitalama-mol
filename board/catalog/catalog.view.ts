namespace $.$$ {
	
	export class $shm_hitalama_board_catalog extends $.$shm_hitalama_board_catalog {

		@ $mol_mem
		list() {
			return $shm_hitalama_profile.current()?.boards(null)!
		}

		@ $mol_action
		add() {
			const entity = this.list()?.make( {'': $hyoo_crus_rank_deny} )
			entity?.title( this.title_default() )
			this.spread( entity.ref().description )
			return entity
		}

		@ $mol_action
		import( files: File[] ) {
			const json = $mol_wire_sync(this.$).$mol_blob_json( files[0] )
			const board = this.add()
			board.deserialize( json )
		}

	}

}
