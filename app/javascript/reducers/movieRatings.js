import { List, fromJS } from 'immutable';

import * as types from '../constants/actionTypes';

export default function movieRatings(state = List(), action) {
  switch (action.type) {
    case types.GET_LIST_RATINGS:
      return fromJS(action.ratings);
    default:
      return state;
  }
}
