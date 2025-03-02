const file = board.block(BLOCK_ID).File()?.remote()
const filename = file.title()

const sql = `
SELECT * FROM parquet_scan('${filename}');
`

const limit = 100
const { head, rows } = $shm_hitalama_duckdb.files_query( [file], sql, limit )

const block = board.table_add( page.get_pointer_pos(), 800, 780 )
block.table_head( head )	
block.table_rows( rows )
