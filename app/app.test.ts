namespace $ {

	$$.$shm_hitalama_app.prototype.profiles_ref = ()=> {
		const val = $mol_state_session.value<string>( '$shm_hitalama_app.prototype.profiles_ref' )
		if( val ) return val
		
		const profiles = $hyoo_crus_glob.land_grab( { '': $hyoo_crus_rank.mod } ).Data( $shm_hitalama_profile_dict )
		return $mol_state_session.value<string>( '$shm_hitalama_app.prototype.profiles_ref', profiles.land().ref().description! )
	}

	
	export const $shm_hitalama_app_test_actions = {

		create_list: async ()=> {
			;($shm_hitalama_app.Root(0).Menu_link_title('lists').dom_node() as HTMLLinkElement).click()
			await sleep(50)
			;($shm_hitalama_app.Root(0).Lists().Open_create().dom_node() as HTMLLinkElement).click()
			await sleep(50)
			$shm_hitalama_app.Root(0).Lists().Creating().Search().Search().click()
			await sleep(100)
			$shm_hitalama_app.Root(0).Lists().Creating().Add()
			$shm_hitalama_app.Root(0).Lists().Creating().Search().Group_id().value('smmblogs')
			await sleep(20)
			$shm_hitalama_app.Root(0).Lists().Creating().Add()
			await sleep(20)
			$shm_hitalama_app.Root(0).Lists().Creating().Save().click()
		},

	}

	function sleep( ms: number ) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

}
