const block = board.table_add( $cursor_pos, 800, 780, BLOCK_TITLE )

block.table_head( [ 'Дата', 'Кол-во', 'Запрос', 'Минус', 'Область поиска', 'Страна', 'Язык' ] )

const rows = board.search_statistics().flatMap( s => {
	if( !s.query() ) return
	return s.statistic_table_rows()
} )
	
block.table_rows( rows )
