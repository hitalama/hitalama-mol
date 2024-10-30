namespace $ {

	export class $shm_hitalama_profile extends $hyoo_crus_entity.with({

		Tokens: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_token ),
		Groups_lists: $hyoo_crus_list_ref_to( ()=> $shm_hitalama_list ),

		Login: $hyoo_crus_atom_str,
		Pass_key: $hyoo_crus_atom_str,

	}){

		@ $mol_action
		password( password: string ) {
			const pass_key = $mol_wire_sync( this.$.$shm_hitalama_profile_key ).export( 
				this.$.$hyoo_crus_auth.current().toString(), 
				password, 
				this.Login()?.val()! 
			)

			this.Pass_key(null)!.val( pass_key )
		}

		@ $mol_mem_key
		auth_key_decrypt( password: string ) {

			const pass_key = this.Pass_key()!.val()!
			if( !pass_key ) return null

			const auth_key = $mol_wire_sync( $mpk_dse_auth ).key_import( pass_key!, password )
			if( !auth_key ) return null

			return auth_key

		}

		@ $mol_action
		enter( password: string ) {
			const key = this.auth_key_decrypt( password )
			if( !key ) return false

			const home = this.$.$hyoo_crus_glob!.home()
			home.Hall(null)!.remote( this )
			return true
		}
		
	}
	
	export const $shm_hitalama_profile_dict = $hyoo_crus_dict_to( $shm_hitalama_profile )

}
