import { Map } from 'immutable';

import * as types from '../constants/actionTypes';
import { reducerFactory } from './reducerUtil';

const handlers = {};

handlers[types.VOTE_MOVIE] = (state, action) => {
  if (action.response.status !== 200) return state;

  const { data } = action.response.data;

  return state.update(data.id, (rating) => rating.set('like', data.like));
};

handlers[types.FETCH_RATINGS] = (state, action) => {
  console.log(action.response);
  const movieList = action.response.data;
  let newState = state;
  movieList.forEach((movie) => {
    newState = newState.set(movie.id, fromJS(movie));
  });

  return newState;
};

export default reducerFactory(Map(), handlers);
