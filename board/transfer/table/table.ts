namespace $ {
	export class $shm_hitalama_board_transfer_table extends $mol_object {
		
		@ $mol_action
		static serialize( table: $shm_hitalama_board_table ) {
			return {
				ref: table.ref().description,

				head: table.Head()?.val(),
				head_method: table.Head_method()?.val(),
				rows: table.Rows()?.val(),
				rows_method: table.Rows_method()?.val(),
				col_widths: table.Col_widths()?.val(),
				col_types: table.Col_types()?.val(),
				rows_checked: table.Rows_checked()?.val(),
			}
		}

		@ $mol_action
		static deserialize( table: $shm_hitalama_board_table, dto: ReturnType< typeof $shm_hitalama_board_transfer_table['serialize'] > ) {
			table.Head( dto.head )?.val( dto.head )
			table.Head_method( dto.head_method )?.val( dto.head_method )
			table.Rows( dto.rows )?.val( dto.rows )
			table.Rows_method( dto.rows_method )?.val( dto.rows_method )
			table.Col_widths( dto.col_widths )?.val( dto.col_widths )
			table.Col_types( dto.col_types )?.val( dto.col_types )
			table.Rows_checked( dto.rows_checked )?.val( dto.rows_checked )
		}
		
	}
}
