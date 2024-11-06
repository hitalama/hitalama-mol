namespace $.$$ {
	
	export class $shm_hitalama_duckdb_page extends $.$shm_hitalama_duckdb_page {

		@ $mol_mem
		project_id() {
			return this.projects().at(0)?.ref().description ?? ''
		}

		projects_dict() {
			const dict = {
				...Object.fromEntries( this.projects().map( p => [ p.ref().description, p.Name()?.val() ] ) ),
			}
			return dict
		}

		@ $mol_mem_key
		project( id: string ) {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( id ), $shm_hitalama_project )
		}

		@ $mol_mem
		projects() {
			return $shm_hitalama_profile.current()?.Projects()?.remote_list() ?? []
		}

		files_label() {
			return this.project_id() ? super.files_label() : []
		}

		@ $mol_mem
		files() {
			const project = this.project( this.project_id() )
			return project.Files()?.remote_list() ?? []
		}

		@ $mol_mem
		file_views() {
			return this.files().map( f => this.File( f.ref().description ) ) ?? []
		}

		@ $mol_mem
		files_checked() {
			return this.files().filter( f => this.file_checked( f.ref().description ) ) ?? []
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $hyoo_crus_file )
		}

		@ $mol_mem_key
		file_name( id: string ) {
			return this.file( $hyoo_crus_ref( id ) )?.name() ?? ''
		}

		@ $mol_mem_key
		query_default( file_id: string ) {
			const name = this.file_name( file_id )
			return name ? `SELECT * FROM parquet_scan('${name}')` : ''
		}

		run( next?: any ) {
			this.query_current( this.query() )
		}

		@ $mol_mem
		duckdb_res() {
			if( !this.query_current() ) return null
			
			const table_arr = $mol_wire_sync(this).conn_query( this.query_current() ).toArray()
			const result = table_arr.map( ( row: any ) => row.toJSON() )
			return result
		}

		@ $mol_mem
		conn() {
			const files = this.files_checked().map( f => ({
				name: f.Name()?.val()!,
				buffer: f.File()?.remote()?.buffer()!
			}) )

			return $shm_hitalama_duckdb.connection( files )
		}

		@ $mol_action
		conn_query( query: string ) {
			return $mol_wire_sync(this).conn().query( query )
		}

	}

}
