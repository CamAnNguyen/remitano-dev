import { Map } from 'immutable';

import * as types from '../constants/actionTypes';
import { reducerFactory } from './reducerUtil';

const handlers = {};

handlers[types.VOTE_MOVIE] = (state, action) => {
  if (action.response.status !== 200) return state;
  const { data } = action.response;

  return state.set(data.movie_id, data.like);
};

handlers[types.FETCH_RATINGS] = (state, action) => {
  const { data } = action.response;
  let newState = state;
  data.forEach((rating) => {
    newState = newState.set(rating.movie_id, rating.like);
  });

  return newState;
};

handlers[types.CLEAR_RATINGS] = () => Map();

export default reducerFactory(Map(), handlers);
