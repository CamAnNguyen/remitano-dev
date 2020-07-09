import { generateAuthActions } from 'redux-token-auth';

import { AUTH_URL } from '../constants/auth';

const config = {
  AUTH_URL,
  userAttributes: { email: 'email@domain.com' },
  userRegistrationAttributes: {
    email: 'email@domain.com',
    password: 'password'
  },
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
