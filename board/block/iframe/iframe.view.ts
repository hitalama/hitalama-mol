namespace $.$$ {

	export class $shm_hitalama_board_block_iframe extends $.$shm_hitalama_board_block_iframe {
		
		@ $mol_mem
		src( next?: string ): string {
			return this.block().Src( next )?.val( next ) ?? ''
		}

		@ $mol_mem
		blocker(): readonly ( any )[] {
			return (this.dragged() || this.resizing()) ? super.blocker() : []
		}

		@ $mol_mem
		editing(): boolean {
			return this.src_focused()
		}
		
	}

}
