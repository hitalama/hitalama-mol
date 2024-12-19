namespace $.$$ {

	export class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {
		
		@ $mol_mem
		Sub() {
			
			const type = this.block().Type()?.val()!
			const obj = this.blocks()[ type ] ?? super.Sub()

			obj.block = () => this.block()
			obj.board = () => this.board()
			obj.Board_page = () => this.Board_page()
			obj.delete = () => this.delete()
			obj.to_top = () => this.to_top()
			obj.to_bottom = () => this.to_bottom()
			obj.sticks_y = () => this.sticks_y()
			obj.sticks_x = () => this.sticks_x()
			obj.selected = (next) => this.selected(next)
			obj.drags_synced = () => this.drags_synced()
			obj.event_contextmenu = (next) => this.event_contextmenu(next)

			return obj
			
		}
		
	}
	
}
