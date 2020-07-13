import * as types from '../constants/actionTypes';
import { FETCH_MOVIES_URL, MOVIE_API_URL } from '../constants/url';
import { CALL_API } from '../middleware/api';

export const fetchMovies = () => (dispatch) => dispatch({
  type: types.FETCH_MOVIES,
  [CALL_API]: {
    method: 'get',
    url: FETCH_MOVIES_URL,
  }
});

export const shareMovie = (youtubeURL) => (dispatch) => dispatch({
  type: types.SHARE_MOVIE,
  [CALL_API]: {
    method: 'post',
    url: MOVIE_API_URL,
    data: { youtubeURL },
  }
});
