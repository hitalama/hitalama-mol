namespace $.$$ {

	export class $shm_hitalama_posts_plots extends $.$shm_hitalama_posts_plots {


		@ $mol_mem
		plot_moments() {
			const dto = this.dto_by_owner( this.owner_ids()[0] ) as $shm_hitalama_posts_dto
			return dto?.[0].map( (time: number)=> new $mol_time_moment( time*1000 ) ) ?? []
		}

		@ $mol_mem
		labels() {
			return this.plot_moments().map( m => m.toString('DD.MM') )
		}

		@ $mol_mem_key
		likes( owner_id: string ) {
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return dto?.[2].map( v => v ) ?? []
		}

		@ $mol_mem_key
		posts( owner_id: string ) {
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return dto?.[0].map( v => 1 ) ?? []
		}

		@ $mol_mem_key
		reposts( owner_id: string ) {
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return dto?.[3].map( v => v ) ?? []
		}

		@ $mol_mem_key
		comments( owner_id: string ) {
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return dto?.[4].map( v => v ) ?? []
		}

		@ $mol_mem_key
		views( owner_id: string ) {
			const dto = this.dto_by_owner( owner_id ) as $shm_hitalama_posts_dto
			return dto?.[5].map( v => v ) ?? []
		}
		
	}
	
}
