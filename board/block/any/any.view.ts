namespace $.$$ {

	export class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {
		
		@ $mol_mem
		Sub() {
			
			const type = this.block().Type()?.val()!
			const obj = this.blocks()[ type ] ?? super.Sub()
			// const obj = this.blocks()[ type ] ?? this.Custom( type ) ?? super.Sub()

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

		// @ $mol_mem_key
		// Custom( type: string ) {
		// 	const obj = new this.$.$shm_hitalama_board_block_text()

		// 	const code_tree = ''
		// 	const code_js = ''
		// 	const code_css = ''
			
		// 	const tree = this.$.$mol_view_tree2_normalize(
		// 		this.$.$mol_tree2_from_string( code_tree )
		// 	).kids[0]

		// 	const base_js = this.$.$mol_tree2_text_to_string_mapped_js(
		// 		this.$.$mol_tree2_js_to_text(
		// 			this.$.$mol_view_tree2_to_js(
		// 				tree.list([ tree ])
		// 			)
		// 		)
		// 	)

		// 	const base_class = ''
		// 	const class_name = ''
		// 	// const my_class = new Function()
		// 	const func = new Function( 'const $ = this.$;\n' + 
		// 		`
		// 			class ${ class_name } extends $.${ base_class } {
		// 				${ code_js }
		// 			}
		// 			return new ${ class_name }
		// 		`
		// 	)
		// 	// const view_class = func.call( { $: this.$ } )

		// 	// const my_class_func = new Function( `$.${ class_name } = class ${ class_name } extends $.${ class_name } {
		// 	// 	${ code_js }
		// 	// }` )
		// 	// const my_class = my_class_func.call( { $: this.$ } )
			
		// 	this.$.$mol_style_attach( class_name, code_css )
		// 	// return `
		// 	// 	$.${ class_name } = ${ base_js }

		// 	// 	$.${ class_name } = class ${ class_name } extends $.${ class_name } {
		// 	// 		${ code_js }
		// 	// 	}

		// 	// 	$.$mol_style_attach(${ class_name }, \`${ code_css }\` )
		// 	// `

		// 	return obj
		// }
		
	}
	
}
