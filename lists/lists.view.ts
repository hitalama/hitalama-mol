namespace $.$$ {

	export class $shm_hitalama_lists extends $.$shm_hitalama_lists {
		
		@ $mol_mem
		current_view() {
			return this.$.$mol_state_arg.value( 'create' ) ? this.Creating() : this.Main()
		}
		
		@ $mol_mem
		profile() {
			return this.$.$hyoo_crus_glob.home().hall_by( $shm_hitalama_profile, {} )
		}

		@ $mol_mem
		token_str() {
			return this.token()?.Token()?.val() || ''
		}

		@ $mol_mem_key
		group_list( ref: $hyoo_crus_ref ) {
			return this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_list )
		}

		@ $mol_mem_key
		name( ref: $hyoo_crus_ref ) {
			return this.group_list( ref ).Name()?.val() || ''
		}

		@ $mol_mem
		lists() {
			return this.profile()?.Groups_lists()?.remote_list().map( l => this.List( l.ref() ) ) ?? []
		}

		@ $mol_mem_key
		groups( ref: $hyoo_crus_ref ) {
			return this.group_list( ref ).Groups()?.remote_list().map( g => this.Group( g.ref() ) ) ?? []
		}

		@ $mol_mem_key
		group_photo_uri( ref: $hyoo_crus_ref ) {
			return this.$.$hyoo_crus_glob.Node( ref, $shm_hitalama_group ).Photo_url()?.val() ?? ''
		}
		
	}

}
