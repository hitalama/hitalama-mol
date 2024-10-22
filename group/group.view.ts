namespace $.$$ {

	export class $shm_hitalama_group extends $.$shm_hitalama_group {
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem
		group_body() {
			return this.token_str() ? super.group_body() : this.group_body_noauth()
		}

		@ $mol_mem
		group_data( next?: any ) {
			if( next === undefined ) return null

			const data = next.response[0]

			this.group_id( data.id )
			this.group_name( data.name )
			this.members_count( data.members_count )
			this.group_photo_uri( data.photo_50 )

			return next
		}

		@ $mol_mem
		posts_data( next?: any ) {
			if( next === undefined ) return null

			console.log('next', next)

			return next
		}

		@ $mol_mem
		posts_rows() {
			if( !this.posts_data() ) return []
			console.log('(this.posts_data().response[0] as any[]).map( (p,i)=> i )', (this.posts_data().response[0] as any[]).map( (p,i)=> i ))
			return (this.posts_data().response[0] as any[]).map( (p,i)=>  this.Post_row( i ) )
		}
		
		@ $mol_mem_key
		post_id( n: number ) {
			return this.posts_data().response[1][n] ?? ''
		}
		
		@ $mol_mem_key
		post_date( n: number ) {
			// console.log('this.posts_data().response[0][n]', this.posts_data().response[0][n])
			// console.log('new $mol_time_moment( this.posts_data().response[0][n] )', new $mol_time_moment( Number(this.posts_data().response[0][n]) * 1000 ))
			return new $mol_time_moment( this.posts_data().response[0][n]*1000 ).toString('DD.MM.YYYY hh:mm')
		}
		
		@ $mol_mem_key
		post_likes( n: number ) {
			return this.posts_data().response[2][n] ?? ''
		}
		
		@ $mol_mem_key
		post_reposts( n: number ) {
			return this.posts_data().response[3][n] ?? ''
		}
		
		@ $mol_mem_key
		post_comments( n: number ) {
			return this.posts_data().response[4][n] ?? ''
		}
		
		@ $mol_mem_key
		post_views( n: number ) {
			return this.posts_data().response[5][n] ?? ''
		}

		@ $mol_action
		search() {
			const group_id = this.group().replace( /http\w*:\/\/vk\.(com|ru)\//, '' )
			
			const code = 'return API.groups.getById({"group_id":"'+ group_id +'","fields":"members_count"});'
			$shm_hitalama_jsonp.vk_execute( this.token_str(), code, this.group_data.bind(this) )
		}

		@ $mol_action
		collect() {
			const owner_id = '-' + this.group_id()
			
			$shm_hitalama_jsonp.vk_newFuncWall( 
				{ access_token: this.token_str(), owner_id, offset: '0', count_execute: '0' }, 
				this.posts_data.bind(this) 
			)
		}
		
		@ $mol_mem
		search_result(): readonly ( any )[] {
			return this.group_data() ? super.search_result() : []
		}
		
	}

}
