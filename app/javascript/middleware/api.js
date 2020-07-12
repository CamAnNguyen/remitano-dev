import axios from 'axios';

export const CALL_API = 'Call API';

export default (store) => (next) => (action) => {
  const api = action[CALL_API];
  if (typeof api === 'undefined') {
    return next(action);
  }

  const { method, url, data } = api;
  if (typeof url !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  const { isSignedIn } = store.getState().get('userAuth').currentUser;
  let axiosInstance;
  if (isSignedIn) {
    const headers = {
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      'token-type': localStorage.getItem('token-type'),
      uid: localStorage.getItem('uid')
    };

    axiosInstance = axios({
      method, url, data, headers
    });
  } else {
    axiosInstance = axios({ method, url, data });
  }

  return axiosInstance.then((response) => next({ response, ...action }));
};
