import * as types from '../constants/actionTypes';
import { MOVIE_API_URL, FETCH_RATINGS_URL } from '../constants/url';
import { CALL_API } from '../middleware/api';

export const voteMovie = (movieId, like) => (dispatch) => dispatch({
  type: types.VOTE_MOVIE,
  [CALL_API]: {
    method: 'put',
    url: `${MOVIE_API_URL}/${movieId}`,
    data: { like }
  }
});

export const fetchRatings = () => (dispatch) => dispatch({
  type: types.FETCH_RATINGS,
  [CALL_API]: {
    method: 'get',
    url: FETCH_RATINGS_URL,
  }
});
