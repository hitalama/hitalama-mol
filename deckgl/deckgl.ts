namespace $ {

	export class $shm_hitalama_deckgl extends $mol_object2 {

		@ $mol_mem
		static lib() {
			const res = $mol_import.script('https://unpkg.com/deck.gl@9.0.38/dist.min.js')
			return res.deck as any
		}

	}
}
