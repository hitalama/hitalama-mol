namespace $.$$ {
	export class $shm_hitalama_board_presence_cursor extends $.$shm_hitalama_board_presence_cursor {
		
		left_px(): string {
			return this.pos()?.[0] + 'px'
		}

		top_px(): string {
			return this.pos()?.[1] + 'px'
		}

		name() {
			const profile = $shm_hitalama_profile.current()
			return profile?.Login()?.val() ?? profile?.ref().description?.toString()!
		}
		
	}
}
