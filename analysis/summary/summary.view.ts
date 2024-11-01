namespace $.$$ {

	export class $shm_hitalama_analysis_summary extends $.$shm_hitalama_analysis_summary {

		@ $mol_mem
		groups_dtos( next?: any ) {
			if( next === undefined ) {
				const groups_id = this.owner_ids().map( id => id.slice(1) ).join(',')
				$mol_wire_async($shm_hitalama_jsonp).vk_groups_getById( { access_token: this.token_str(), groups_id }, this.groups_dtos.bind(this) )
				return
			}

			const groups = new Map
			this.owner_ids().forEach( id => {
				const match = next?.response.find( (g: any) => g.id == id.slice(1) )
				if( match ) groups.set( id, match )
			} )

			return groups
		}

		rows() {
			const rows = this.owner_ids().map( id => this.Row( id ) )
			return rows.length > 1 ? [ ... rows, this.Sum_row() ] : rows
		}
		
		@ $mol_mem_key
		photo( owner_id: string ) {
			const group = this.groups_dtos()?.get( owner_id )
			return group?.photo_50 ?? ''
		}

		@ $mol_mem_key
		owner_id( owner_id: string ) {
			return owner_id
		}

		@ $mol_mem_key
		name( owner_id: string ) {
			const group = this.groups_dtos()?.get( owner_id )
			return group?.name ?? ''
		}

		@ $mol_mem_key
		members_count( owner_id: string ) {
			const group = this.groups_dtos()?.get( owner_id )
			return group?.members_count ?? ''
		}

		@ $mol_mem_key
		posts_counts( owner_id: string ) {
			return this.posts_dto_by_owner(owner_id)?.[0].length ?? ''
		}

		@ $mol_mem_key
		views( owner_id: string ) {
			return String( sum( this.posts_dto_by_owner(owner_id)?.[5] ) ?? '' )
		}

		@ $mol_mem_key
		likes( owner_id: string ) {
			return String( sum( this.posts_dto_by_owner(owner_id)?.[2] ) ?? '' )
		}

		@ $mol_mem_key
		reposts( owner_id: string ) {
			return String( sum( this.posts_dto_by_owner(owner_id)?.[3] ) ?? '' )
		}

		@ $mol_mem_key
		comments( owner_id: string ) {
			return String( sum( this.posts_dto_by_owner(owner_id)?.[4] ) ?? '' )
		}

		@ $mol_mem_key
		erv( owner_id: string ) {
			return '1'
		}
		
		@ $mol_mem
		sum_members_count() {
			const arr = this.owner_ids().map( id => Number( this.members_count( id ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_posts_counts() {
			const arr = this.owner_ids().map( id => Number( this.posts_counts( id ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_views() {
			const arr = this.owner_ids().map( id => Number( this.views( id ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_likes() {
			const arr = this.owner_ids().map( id => Number( this.likes( id ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_reposts() {
			const arr = this.owner_ids().map( id => Number( this.reposts( id ) ) )
			return String( sum(arr) ?? '' )
		}

		@ $mol_mem
		sum_comments() {
			const arr = this.owner_ids().map( id => Number( this.comments( id ) ) )
			return String( sum(arr) ?? '' )
		}
		
	}

	function sum( arr?: number[] ) {
		return arr?.reduce( ( acc, v )=> acc + v, 0 )
	}
	
}
