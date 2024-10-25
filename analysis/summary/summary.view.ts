namespace $.$$ {

	export class $shm_hitalama_analysis_summary extends $.$shm_hitalama_analysis_summary {

		@ $mol_mem_key
		group( ref: $hyoo_crus_ref ) {
			return this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_group )
		}

		rows() {
			const rows = this.groups().map( g => this.Row( g.ref() ) )
			return rows.length > 1 ? [ ... rows, this.Sum_row() ] : rows
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
		posts_dto_by_ref( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_owner( this.group( ref ).Owner_id()?.val() )
		}

		@ $mol_mem_key
		posts_counts( ref: $hyoo_crus_ref ) {
			return this.posts_dto_by_ref(ref)?.[0].length ?? ''
		}

		@ $mol_mem_key
		views( ref: $hyoo_crus_ref ) {
			return String( sum( this.posts_dto_by_ref(ref)?.[5] ) ?? '' )
		}

		@ $mol_mem_key
		likes( ref: $hyoo_crus_ref ) {
			return String( sum( this.posts_dto_by_ref(ref)?.[2] ) ?? '' )
		}

		@ $mol_mem_key
		reposts( ref: $hyoo_crus_ref ) {
			return String( sum( this.posts_dto_by_ref(ref)?.[3] ) ?? '' )
		}

		@ $mol_mem_key
		comments( ref: $hyoo_crus_ref ) {
			return String( sum( this.posts_dto_by_ref(ref)?.[4] ) ?? '' )
		}
		
		@ $mol_mem
		sum_member_counts() {
			const arr = this.groups().map( g => Number( this.member_counts( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_posts_counts() {
			const arr = this.groups().map( g => Number( this.posts_counts( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_views() {
			const arr = this.groups().map( g => Number( this.views( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_likes() {
			const arr = this.groups().map( g => Number( this.likes( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_reposts() {
			const arr = this.groups().map( g => Number( this.reposts( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_comments() {
			const arr = this.groups().map( g => Number( this.comments( g.ref() ) ) )
			return String( sum(arr) ?? '' )
		}
		
	}

	function sum( arr?: number[] ) {
		return arr?.reduce( ( acc, v )=> acc + v, 0 )
	}
	
}
