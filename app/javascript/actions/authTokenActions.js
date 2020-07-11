import { generateAuthActions } from 'redux-token-auth';

import { AUTH_URL } from '../constants/url';

const config = {
  authUrl: AUTH_URL,
  // Contains attributes from User model
  // With below config, only email attributes would be displayed
  // NOTE: null or empty value would cause undefined value in reducer
  userAttributes: { email: 'email' },
  // contains attributes that necessary for registration
  userRegistrationAttributes: {},
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
};
