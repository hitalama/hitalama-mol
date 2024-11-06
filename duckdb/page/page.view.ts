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

		@ $mol_mem
		project() {
			return $hyoo_crus_glob.Node( $hyoo_crus_ref( this.project_id() ), $shm_hitalama_project )
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
			return this.project().Files()?.remote_list() ?? []
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
			return name ? `SELECT * FROM parquet_scan('${name}');` : ''
		}

		@ $mol_mem
		query( next?: string ): string {
			const file_id = this.files()?.[0]?.ref().description
			return next ?? (file_id ? this.query_default( file_id! ) : '')
		}

		run( next?: any ) {
			this.query_current( this.query() )
			const log = this.project().Query_logs(null)?.local_make()
			log?.Query(null)!.val( this.query() )
			log?.Time(null)!.val( (new $mol_time_moment).valueOf() )
		}

		@ $mol_mem
		duckdb_res() {
			if( !this.query_current() ) return null
			
			const table_arr = $mol_wire_sync(this).conn_query( this.query_current() ).toArray().slice(0,100)
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

		@ $mol_mem_key
		query_log( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_project_query_log )
		}

		@ $mol_mem_key
		query_time( ref: $hyoo_crus_ref ) {
			const val = this.query_log( ref ).Time()?.val()!
			const moment = new $mol_time_moment( val )
			return moment.toString( 'YYYY-MM-DD hh:mm:ss' )
		}

		@ $mol_mem_key
		query_sql( ref: $hyoo_crus_ref ) {
			return this.query_log( ref ).Query()?.val() ?? ''
		}

		@ $mol_mem
		logs() {
			return this.project().Query_logs()?.remote_list().map( l => this.Query_log( l.ref() ) ) ?? []
		}

		@ $mol_action
		logs_clear() {
			this.project().Query_logs()?.remote_list( [] )
		}

	}

}
