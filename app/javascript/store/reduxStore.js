import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { reduxTokenAuthReducer } from 'redux-token-auth';

import api from '../middleware/api';

import ui from '../reducers/ui';
import movies from '../reducers/movies';

const rootReducer = combineReducers({
  ui,
  movies,
  userAuth: reduxTokenAuthReducer
});

const reduxStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  );

  return store;
};

export default reduxStore;
