const block = board.table_add( page.get_pointer_pos(), 800, 780 )

block.table_head( [ 'Дата', 'Кол-во', 'Позитив', 'Негатив', 'Запрос', 'Минус', 'Область поиска', 'Страна', 'Язык' ] )

const rows = []

board.search_statistics().forEach( s => {
	if( !s.query() ) return
	
	s.File_mass_media()?.remote()?.File()?.remote()?.str()?.split('\n')?.forEach( line => {
		const [ date, count, positive, negative ] = line.split(';')
		if( isNaN( Number( count ) ) ) return
		rows.push( [ date, count, positive, negative, s.query(), s.excluded_words(), 'СМИ', s.country(), s.language() ] )
	} )
	
	s.File_social_media()?.remote()?.File()?.remote()?.str()?.split('\n')?.forEach( line => {
		const [ date, count, positive, negative ] = line.split(';')
		if( isNaN( Number( count ) ) ) return
		rows.push( [ date, count, positive, negative, s.query(), s.excluded_words(), 'Соц.медиа', s.country(), s.language() ] )
	} )
} )
	
block.table_rows( rows )
