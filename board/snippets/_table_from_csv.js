const file = board.block(BLOCK_ID).File()?.remote()
const filename = file.title()

const sql = `
SELECT * FROM '${filename}';
`

const { head, rows } = $shm_hitalama_duckdb.files_query( [file], sql )

const block = board.table_add( $cursor_pos, 800, 780 )
block.table_head( head )
block.table_rows( rows )
