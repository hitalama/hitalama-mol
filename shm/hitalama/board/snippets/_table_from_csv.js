const csv = board.block( BLOCK_ID ).file_str()
const lines = csv.split('\n')

const table = board.table_add( page.get_pointer_pos(), 800, 780 )
table.table_head( lines[0].split(';') )
table.table_rows( lines.slice(1).map( line => line.split(';') ) )
