namespace $.$$ {

	export class $shm_hitalama_group_lists extends $.$shm_hitalama_group_lists {
		
		@ $mol_mem
		current_view() {
			return this.$.$mol_state_arg.value( 'create' ) ? this.Creating() : this.Main()
		}
		
	}

}
