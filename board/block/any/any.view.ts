namespace $.$$ {

	export class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {
		
		@ $mol_mem
		Sub() {
			
			let obj: $shm_hitalama_board_block_float

			const type = this.block().Type()?.val()
			switch (type) {
				case 'input': obj = this.Input(); break;
				case 'iframe': obj = this.Iframe(); break;
				default: obj = this.Text()
			}

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
