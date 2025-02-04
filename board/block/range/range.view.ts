namespace $.$$ {
	export class $shm_hitalama_board_block_range extends $.$shm_hitalama_board_block_range {
		
		value( next?: number ): number {
			return this.block().range().value( next )
		}

		min( next?: number ): number {
			return this.block().range().min( next )
		}

		max( next?: number ): number {
			return this.block().range().max( next )
		}

		step( next?: number ): number {
			return this.block().range().step( next )
		}

		copy_text(): string {
			return super.copy_text().replace( '{ref}', this.block().ref().description?.toString()! )
		}
		
	}
}
