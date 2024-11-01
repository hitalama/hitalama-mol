namespace $.$$ {

	export class $shm_hitalama_posts_plots extends $.$shm_hitalama_posts_plots {

		@ $mol_mem
		traversed() {
			let min = new $mol_time_moment().valueOf()/1000
			const indexes: Map< string, number > = new Map
			const posts_count: Map< string, number > = new Map

			this.owner_ids().forEach( id => {
				const dto = this.dto_by_owner( id ) as $shm_hitalama_posts_dto 
				dto?.[0].forEach( ( time, index ) => {
					const time_str = (new $mol_time_moment( time*1000 )).toString('DD.MM.YY')
					indexes.set( id+':'+time_str, index )
					posts_count.set( id+':'+time_str, (posts_count.get( id+':'+time_str ) ?? 0) + 1  )
					if ( time < min ) { min = time }
				} )
			} )

			const moments = []
			let max = (new $mol_time_moment().valueOf() / 1000)

			for( let time = min; time < max; time += 86400 ) {
				moments.push( (new $mol_time_moment( time*1000 )).toString('DD.MM.YY') )
			}

			return { indexes, moments, posts_count }
		}

		@ $mol_mem
		moments() {
			return this.traversed().moments
		}

		@ $mol_mem
		labels() {
			return this.moments()
		}

		@ $mol_mem_key
		likes( owner_id: string ) {
			const indexes = this.traversed().indexes
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return this.traversed().moments.map( t => {
				return dto?.[2]?.[ indexes.get( owner_id+':'+t )! ] ?? 0
			} )
		}

		@ $mol_mem_key
		posts( owner_id: string ) {
			const posts_count = this.traversed().posts_count
			return this.traversed().moments.map( t => posts_count.get( owner_id+':'+t ) )
		}

		@ $mol_mem_key
		reposts( owner_id: string ) {
			const indexes = this.traversed().indexes
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return this.traversed().moments.map( t => dto?.[3]?.[ indexes.get( owner_id+':'+t )! ] ?? 0 )
		}

		@ $mol_mem_key
		comments( owner_id: string ) {
			const indexes = this.traversed().indexes
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return this.traversed().moments.map( t => dto?.[4]?.[ indexes.get( owner_id+':'+t )! ] ?? 0 )
		}

		@ $mol_mem_key
		views( owner_id: string ) {
			const indexes = this.traversed().indexes
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return this.traversed().moments.map( t => dto?.[5]?.[ indexes.get( owner_id+':'+t )! ] ?? 0 )
		}
		
	}
	
}
