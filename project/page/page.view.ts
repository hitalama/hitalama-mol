namespace $.$$ {
	
	export class $shm_hitalama_project_page extends $.$shm_hitalama_project_page {
		
		@ $mol_action
		project_cut() {
			console.log('this.project().ref()', this.project().ref())
			$shm_hitalama_profile.current()?.Projects()?.cut( this.project().ref() )
		}

		attach_new( files: File[] ) {
			const file = this.project().Files(null)?.make( {'': $hyoo_crus_rank.get} )
			file?.Name(null)?.val( files[0].name )
			file?.Size(null)?.val( files[0].size )
			file?.File(null)?.ensure( {'':$hyoo_crus_rank.get} )?.blob( files[0] )
			return files
		}

		@ $mol_mem
		name( next?: string ) {
			return this.project().Name(next)?.val( next ) ?? ''
		}

		@ $mol_mem_key
		file( ref: $hyoo_crus_ref ) {
			return $hyoo_crus_glob.Node( ref, $shm_hitalama_file )
		}

		@ $mol_mem_key
		file_name( ref: $hyoo_crus_ref ) {
			return this.file( ref )?.Name()?.val() ?? ''
		}

		@ $mol_mem_key
		file_size( ref: $hyoo_crus_ref ) {
			return $mol_si_short( this.file( ref )?.Size()?.val() ?? 0, 'B' )
			// return this.file( ref )?.name() ?? ''
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
