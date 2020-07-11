import axios from 'axios';

export const CALL_API = 'Call API';

const callApi = ({ method, url, data }) => axios({ method, url, data });

export default (store) => (next) => (action) => {
  const api = action[CALL_API];
  if (typeof api === 'undefined') {
    return next(action);
  }

  const { method, url, data } = api;
  let { normalizer } = api;
  if (typeof url !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!normalizer) {
    normalizer = (res) => res;
  }

  return callApi({ method, url, data }).then((response) => next({
    response: normalizer(response, store, action.type),
    ...action
  }));
};
