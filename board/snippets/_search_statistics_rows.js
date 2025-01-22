return board.search_statistics().map( s => [
	s.query(),
	s.excluded_words(),
	s.prediod(),
	s.country(),
	s.language(),
	s.mass_media_title(),
	s.social_media_title(),
	s.type(),
	s.tags(),
	s.category(),
] )
