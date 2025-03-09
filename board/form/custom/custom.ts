namespace $ {

	const tag_regexp = /#\w*/g

	type Field_type = ReturnType< $shm_hitalama_board_form_custom['types_supported'] >[ number ]

	export class $shm_hitalama_board_form_custom extends $hyoo_crus_entity.with({
		Use_text_from: $hyoo_crus_atom_ref_to( ()=> $shm_hitalama_board_block ),
		Objects: $hyoo_crus_atom_jsan,
	}) {

		@ $mol_mem
		objects( next?: any[] ) {
			return this.Objects(next)?.val(next) ?? []
		}

		@ $mol_mem
		block_with_text() {
			return this.Use_text_from()?.remote()
		}
		
		@ $mol_mem
		text( next?: string ): string {
			return this.block_with_text()?.text( next ) ?? ''
		}
		
		@ $mol_mem
		fields_parsed() {
			const lines = this.text().split('\n').flatMap( line => line.split('|') ).map( s => s.trim() )

			const dict: Record< string, ReturnType< $shm_hitalama_board_form_custom['field_parse'] > > = {}

			const arr = lines.map( line => {
				const parsed = this.field_parse( line )
				dict[ parsed.name ] = parsed
				return parsed
			} )
			
			return { dict, arr }
		}
		
		@ $mol_action
		field_parse( str: string ) {
			const tags: string[] = []

			const name = str.replaceAll( tag_regexp, tag => {
				tags.push( tag )
				return ''
			} ).trim()
			
			const type_tag = tags.find( t => this.types_supported().includes( t.slice(1) as Field_type ) )

			return {
				tags,
				name, 
				type: (type_tag?.slice(1) ?? 'any') as Field_type,
			}
		}

		@ $mol_mem
		field_names() {
			return this.fields_parsed().arr.map( f => f.name )
		}

		types_supported() {
			return [
				'any',
				'string',
				'date',
				'period',
				'file',
			] as const
		}

		@ $mol_mem_key
		field_type( name: string ) {
			return this.fields_parsed().dict?.[name].type
		}

		@ $mol_mem_key
		field_tags( name: any ) {
			return this.fields_parsed().dict[name].tags
		}

		@ $mol_action
		obj_add( obj: any ) {
			this.objects( [ ...this.objects(), obj ] )
		}
		
	}

}
