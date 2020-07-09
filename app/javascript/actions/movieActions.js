import * as types from '../constants/actionTypes';
import { AUTH_URL } from '../constants/auth';
import { CALL_API } from '../middleware/api';

export const getUserMovies = (email, password) => (dispatch) => dispatch({
  type: types.LOGIN_USER,
  [CALL_API]: {
    endpoint: AUTH_URL,
    options: {
      credentials: 'same-origin',
      method: 'post',
      body: { email, password }
    }
  }
});
