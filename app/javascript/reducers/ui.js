import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const defaultState = Map({
  loading: false,
  notification: '',
});

export default function ui(state = defaultState, action) {
  switch (action.type) {
    case types.SET_LOADING: {
      return state.set('loading', true);
    }
    case types.UNSET_LOADING: {
      return state.set('loading', false);
    }
    case types.SET_NOTIFICATION: {
      return state.set('notification', action.notification);
    }
    case types.RESET_NOTIFICATION: {
      return state.set('notification', '');
    }
    default:
      return state;
  }
}
