namespace $.$$ {

	export class $shm_hitalama_analysis_summary extends $.$shm_hitalama_analysis_summary {

		@ $mol_mem_key
		group( ref: $hyoo_crus_ref ) {
			return this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_group )
		}

		rows() {
			return this.groups().map( g => this.Row( g.ref() ) )
		}
		
		@ $mol_mem_key
		photo( ref: $hyoo_crus_ref ) {
			return this.group( ref ).Photo_url()?.val() ?? ''
		}

		@ $mol_mem_key
		name( ref: $hyoo_crus_ref ) {
			return this.group( ref ).Name()?.val() ?? ''
		}

		@ $mol_mem_key
		member_counts( ref: $hyoo_crus_ref ) {
			return String( this.group( ref ).Members_count()?.val() ) ?? ''
		}

		@ $mol_mem_key
		posts_counts( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )?.[0].length ?? ''
		}

		@ $mol_mem_key
		views( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )?.[5].reduce( (v:number, acc:number) => v+acc, 0 ) ?? ''
		}

		@ $mol_mem_key
		likes( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )?.[2].reduce( (v:number, acc:number) => v+acc, 0 ) ?? ''
		}

		@ $mol_mem_key
		reposts( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )?.[3].reduce( (v:number, acc:number) => v+acc, 0 ) ?? ''
		}

		@ $mol_mem_key
		comments( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )?.[4].reduce( (v:number, acc:number) => v+acc, 0 ) ?? ''
		}
		
	}
	
}
