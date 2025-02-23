$.$widget_ba_messagecount = class $widget_ba_messagecount extends $.$widget_ba_messagecount {

	click() {
		const params = new URLSearchParams( {
			themeId: 13757820,
			timeFrom: this.block().data().timeFrom,
			timeTo: this.block().data().timeTo,
			token: '09de1158b833c013115bd5986a09667b',
		} )

		const uri_messagecount = `https://brandanalytics.ru/v1/statistic/messagecount/?${params.toString()}`
		const json = this.$.$mol_fetch.json( uri_messagecount )

		const histogram = json?.data.current.histogram

		const block = this.board().table_add( this.Board_page().get_pointer_pos(), 800, 780 )
		block.table_head( [ 'Дата', 'Кол-во сообщений' ] )
		const rows = Object.keys( histogram ).map( timestamp => {
			const date = new $mol_time_moment( timestamp * 1000 )
			return [ date.toString('DD.MM.YYYY'), histogram[timestamp].msgs ]
		} )
		block.table_rows( rows )
	}

	period( next ){
		const { from: from_current , to: to_current } = this.block().data() ?? {}
		const { from: from_next , to: to_next } = next ?? {}

		const from = from_next || from_current || ''// || this.date_from_default()
		const to = to_next || to_current || ''// || this.date_to_default()

		if( from || to ) {
			this.block().data( { 
				from, 
				to,
				timeFrom: Math.floor( new $mol_time_moment( from ).valueOf() / 1000 ),
				timeTo: Math.floor( new $mol_time_moment( to ).valueOf() / 1000 ),
			} )
		}

		return { from, to }
	}

	date_from( next ) {
		return this.period( {from: next} ).from
	}

	date_to( next ) {
		return this.period( {to: next} ).to
	}

}
