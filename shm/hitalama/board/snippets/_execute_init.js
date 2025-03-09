const $value = board?.block_value.bind(board);
const $data = board?.block_data.bind(board);
const $text = board?.block_text.bind(board);
const $cursor_pos = page?.get_pointer_pos();
const $secret = $shm_hitalama_profile.current()?.secret_val.bind($shm_hitalama_profile.current());
