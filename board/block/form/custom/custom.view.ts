namespace $.$$ {
	export class $shm_hitalama_board_block_form_custom extends $.$shm_hitalama_board_block_form_custom {
		
		@ $mol_mem
		block_with_text() {
			const use_from = this.block().Use_text_from()?.remote()
			return use_from ?? this.block()
		}

		field_names() {
			const field_names = this.block_with_text().text().split('\n')
			return field_names
		}

		form_fields(): readonly ( any )[] {
			return this.field_names().map( name => this.Field( name ) )
		}

		field_name( id: any ): string {
			return id
		}

		clear() {
			this.field_names().forEach( name => {
				this.field_value( name, '' )
			} )
		}

		submit() {
			const data: any = this.block().data() ?? []
			const obj = Object.fromEntries( this.field_names().map( n => [ n, this.field_value( n ) ] ) )
			this.block().data( [[ ...data, obj ]] )
		}
		
	}
}
