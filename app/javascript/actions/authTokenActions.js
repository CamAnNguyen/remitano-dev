import { generateAuthActions } from 'redux-token-auth';

import { AUTH_URL } from '../constants/url';

const config = {
  authUrl: AUTH_URL,
  // contains attributes from User model,
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
