namespace $.$$ {
	export class $shm_hitalama_file_attach extends $.$shm_hitalama_file_attach {
		
		filename(): string {
			const file = this.files()[0]
			return file?.name
		}
		
	}
}
