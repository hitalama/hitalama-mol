$.$my_button = class $my_button extends $.$my_button {

	click() {
		this.board().text_add( this.Board_page().get_pointer_pos(), 'Текст' )
	}

}
