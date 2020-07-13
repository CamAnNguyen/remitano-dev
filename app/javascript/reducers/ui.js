import { Map } from 'immutable';
import * as types from '../constants/actionTypes';
import { MOVIE_LIST } from '../constants/contentViews';

const defaultState = Map({
  contentView: MOVIE_LIST,
  loading: false,
  notification: '',
  notificationStyle: 'danger',
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
    case types.SET_CONTENT_VIEW: {
      return state.set('contentView', action.contentView);
    }
    default:
      return state;
  }
}
