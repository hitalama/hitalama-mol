namespace $.$$ {
	
	export class $shm_hitalama_project_page extends $.$shm_hitalama_project_page {

		@ $mol_mem
		project(): $shm_hitalama_project {
			return this.entity().cast( $shm_hitalama_project )
		}

		attach_new( files: File[] ) {
			const file = this.project().Files(null)?.make( {'': $hyoo_crus_rank.get} )
			file?.title( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( {'':$hyoo_crus_rank.get} )?.blob( files[0] )
			return files
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_file )
		}

		@ $mol_mem_key
		file_name( ref: $hyoo_crus_ref ) {
			return this.file( ref )?.title() ?? ''
		}

		@ $mol_mem_key
		file_size( ref: $hyoo_crus_ref ) {
			return $mol_si_short( this.file( ref )?.Size()?.val() ?? 0, 'B' )
		}

		@ $mol_mem
		files() {
			return this.project().Files()?.remote_list().map( f => this.File( f.ref() ) ) ?? []
		}

		@ $mol_mem
		files_clear() {
			this.project().Files()?.remote_list( [] )
		}

	}

}
