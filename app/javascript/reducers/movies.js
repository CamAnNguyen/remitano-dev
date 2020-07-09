import { List, fromJS } from 'immutable';

import * as types from '../constants/actionTypes';

export default function movies(state = List(), action) {
  switch (action.type) {
    case types.GET_LIST_MOVIES:
      return fromJS(action.movies);
    default:
      return state;
  }
}
