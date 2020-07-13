import { Map } from 'immutable';
import * as types from '../constants/actionTypes';
import { MOVIE_LIST } from '../constants/contentViews';

import { reducerFactory, changeState } from './reducerUtil';

const defaultState = Map({
  contentView: MOVIE_LIST,
  loading: false,
  notification: '',
  notificationStyle: 'danger',
});

const handlers = {};
handlers[types.SET_NOTIFICATION] = changeState('notification');
handlers[types.SET_CONTENT_VIEW] = changeState('contentView');
handlers[types.SET_LOADING] = changeState('loading');
handlers[types.UNSET_LOADING] = changeState('loading');

export default reducerFactory(defaultState, handlers);
