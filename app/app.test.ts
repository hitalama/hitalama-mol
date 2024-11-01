namespace $ {

	$$.$shm_hitalama_app.prototype.profiles_ref = ()=> {
		const val = $mol_state_session.value<string>( '$shm_hitalama_app.prototype.profiles_ref' )
		if( val ) return val
		
		const profiles = $hyoo_crus_glob.land_grab( { '': $hyoo_crus_rank.mod } ).Data( $shm_hitalama_profile_dict )
		return $mol_state_session.value<string>( '$shm_hitalama_app.prototype.profiles_ref', profiles.land().ref().description! )
	}

}
