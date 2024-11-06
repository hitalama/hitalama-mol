namespace $.$$ {
	
	export class $shm_hitalama_project_page extends $.$shm_hitalama_project_page {

		attach_new( files: File[] ) {
			const file = $shm_hitalama_profile.current()?.Files(null)?.make( {'': $hyoo_crus_rank.get} )
			file?.blob( files[0] )
			return files
		}

		@ $mol_mem
		name( next?: string ) {
			return this.project().Name(next)?.val( next ) ?? ''
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $hyoo_crus_file )
		}

		@ $mol_mem_key
		file_name( ref: $hyoo_crus_ref ) {
			return this.file( ref )?.name() ?? ''
		}

		@ $mol_mem
		files() {
			return $shm_hitalama_profile.current()?.Files()?.remote_list().map( f => this.File( f.ref() ) ) ?? []
		}

		@ $mol_mem
		files_clear() {
			this.$.$shm_hitalama_profile.current()?.Files()?.remote_list( [] )
		}

	}

}
