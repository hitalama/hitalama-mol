namespace $.$$ {
	
	export class $shm_hitalama_entity_catalog extends $.$shm_hitalama_entity_catalog {

		@ $mol_mem
		list() {
			return null as any as InstanceType< ReturnType< typeof $hyoo_crus_list_ref_to > >
		}

		@ $mol_action
		add() {
			const entity = this.list()?.make( {'': $hyoo_crus_rank.get} )
			entity?.title( this.title_default() )
			this.spread( entity.ref().description )
			return entity
		}

		@ $mol_action
		cut( id: string ) {
			this.list()?.cut( $hyoo_crus_ref( id ) )
		}

		@ $mol_mem_key
		entity( id: string ) {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $hyoo_crus_entity )
		}

		@ $mol_mem
		entities() {
			return this.list().remote_list()
		}

		@ $mol_mem
		spreads() {
			return Object.fromEntries( this.entities().map( entity => [
				entity.ref().description,
				this.Page( entity.ref().description ),
			] ) )
		}

	}

}
