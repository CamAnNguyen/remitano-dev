import { Map, fromJS } from 'immutable';

import * as types from '../constants/actionTypes';

const initialState = {
  currentUser: {
    isLoading: false,
    isSignedIn: false,
    attributes: {
      email: '',
      password: ''
    },
  },
}

export default function authToken(state = Map(initialState), action) {
  switch (action.type) {
    default:
      return state;
  }
}
