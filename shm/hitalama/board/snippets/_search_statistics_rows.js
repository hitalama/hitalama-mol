return board.search_statistics().map( s => [
	s.query(),
	s.excluded_words(),
	s.prediod(),
	s.country(),
	s.language(),
	s.File_mass_media()?.remote()?.ref()?.description,
	s.File_social_media()?.remote()?.ref()?.description,
	s.type(),
	s.tags(),
	s.category(),
] )
