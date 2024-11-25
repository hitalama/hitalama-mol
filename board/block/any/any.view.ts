namespace $.$$ {

	export class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {
		
		@ $mol_mem
		Sub() {
			
			let obj: $shm_hitalama_board_block_float

			console.log('this.block().Type()?.val()', this.block().Type()?.val())
			if( this.block().Type()?.val() == 'input' ) obj = new this.$.$shm_hitalama_board_block_input()
			else obj = new this.$.$shm_hitalama_board_block_text()

			obj.block = () => this.block()
			obj.delete = () => this.delete()
			obj.to_top = () => this.to_top()
			obj.to_bottom = () => this.to_bottom()
			obj.sticks_y = () => this.sticks_y()
			obj.sticks_x = () => this.sticks_x()
			obj.selected = (next) => this.selected(next)

			return obj
			
		}
		
	}
	
}
