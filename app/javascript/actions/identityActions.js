import * as types from '../constants/actionTypes';
import { IDENTITY_API_URL } from '../constants/url';
import { CALL_API } from '../middleware/api';

export const checkIdentity = (email) => (dispatch) => dispatch({
  type: types.CHECK_IDENTITY,
  [CALL_API]: {
    method: 'get',
    url: `${IDENTITY_API_URL}/${email}`
  }
});
