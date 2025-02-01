namespace $ {
	export class $shm_hitalama_board_transfer_chart extends $mol_object {
		
		@ $mol_action
		static serialize( chart: $shm_hitalama_board_chart ) {
			const axis_details = chart.Axis_details()?.keys().map( key => ([
				key?.toString()!, chart.Axis_details()?.key( key ).val()!
			] as const ) )
			const filters_options = chart.Filters_options()?.keys().map( key => ([
				key?.toString()!, chart.Filters_options()?.key( key ).val()!
			] as const ) )

			return {
				axis: chart.Axis()?.val(),
				values: chart.Values()?.val(),
				groups: chart.Groups()?.val(),
				filters_enabled: chart.Filters_enabled()?.val(),

				axis_details,
				filters_options,
			}
		}

		@ $mol_action
		static deserialize( chart: $shm_hitalama_board_chart, dto: ReturnType< typeof $shm_hitalama_board_transfer_chart['serialize'] > ) {
			chart.Axis( dto.axis )?.val( dto.axis )
			chart.Values( dto.values )?.val( dto.values )
			chart.Groups( dto.groups )?.val( dto.groups )
			chart.Filters_enabled( dto.filters_enabled )?.val( dto.filters_enabled )

			dto.axis_details?.forEach( ([ key, val ]) => {
				chart.Axis_details( null )?.key( key, 'auto' ).val( val )
			} )

			dto.filters_options?.forEach( ([ key, val ]) => {
				chart.Filters_options( null )?.key( key, 'auto' ).val( val )
			} )
		}
		
	}
}
