import { Map, fromJS } from 'immutable';

import * as types from '../constants/actionTypes';

export default function currentUser(state = Map(), action) {
  switch (action.type) {
    case types.GET_USER: {
      return fromJS(action.user);
    }
    default:
      return state;
  }
}
