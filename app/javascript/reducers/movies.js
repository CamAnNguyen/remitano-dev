import { Map, fromJS } from 'immutable';

import * as types from '../constants/actionTypes';
import { reducerFactory } from './reducerUtil';

const handlers = {};

handlers[types.SHARE_MOVIE] = (state, action) => {
  if (action.response.status !== 201) return state;

  const { data } = action.response.data;
  let immuMovie = fromJS(data.attributes);
  immuMovie = immuMovie.set('id', data.id);

  return state.set(data.id, immuMovie);
};

handlers[types.FETCH_MOVIES] = (state, action) => {
  const movieList = action.response.data;
  let newState = state;
  movieList.forEach((movie) => {
    newState = newState.set(movie.id, fromJS(movie));
  });

  return newState;
};

export default reducerFactory(Map(), handlers);
