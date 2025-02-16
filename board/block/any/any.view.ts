namespace $.$$ {

	export class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {

		@ $mol_mem
		custom_expose() {
			const custom = this.block().Type_custom()?.remote()!

			const class_name = custom.class_name()!
			const code_css = custom.Code_css()?.value()!
			this.$.$mol_style_attach( class_name, code_css )

			const code_tree = custom.Code_view_tree()?.value()!
			const code_js = custom.Code_js()?.value()!
			
			const tree = this.$.$mol_view_tree2_normalize(
				this.$.$mol_tree2_from_string( code_tree )
			).kids[0]

			const base_js = this.$.$mol_tree2_text_to_string_mapped_js(
				this.$.$mol_tree2_js_to_text(
					this.$.$mol_view_tree2_to_js(
						tree.list([ tree ])
					)
				)
			)
			
			const code = `const $ = this.$;\n`+
				`$.${ class_name } = ${ base_js };\n`+
				`${code_js};`
			
			const func = new Function( code )
			func.call( { $: this.$ } )
		}
		
		@ $mol_mem
		Custom(){
			if( this.block().type() !== 'custom' ) return super.Sub()
				
			const custom = this.block().Type_custom()?.remote()!
			const code_css = custom.Code_css()?.value()!
			const code_tree = custom.Code_view_tree()?.value()!
			const code_js = custom.Code_js()?.value()!

			const class_name = custom?.class_name()!

			try {
				this.custom_expose()
				const obj = new (this.$ as any)[ class_name ]
				return obj as $shm_hitalama_board_block_float
				
			} catch (error) {
				if( !$mol_promise_like(error) ) {
					console.error( error )
					return super.Sub()
				}
				else throw error
			}
		}

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
			obj.hovered = (next) => this.hovered(next)
			obj.drags_synced = () => this.drags_synced()
			obj.on_contextmenu = (next) => this.on_contextmenu(next)
			obj.zoom = () => this.zoom()

			return obj
		}

		// @ $mol_mem
		// source_js_decorators(  ) {
		// 	const list = new Array<string>()

		// 	const add = (prop_name: string, key: boolean, next: boolean) => {
		// 		if (!key && !next) return
		// 		if (this.source_js().includes(`/*${prop_name}*/`))
		// 		list.push(`($mol_mem${key ? '_key' : ''}(($.${ this.self() }.prototype), "${ prop_name }"));`)
		// 	}

		// 	this.props().forEach(prop => add(prop.name(), prop.multiple(), prop.changeable()))

		// 	return list.join('\n')
		// }
		
	}
	
}
