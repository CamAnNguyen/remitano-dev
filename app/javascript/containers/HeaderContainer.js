import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  signInUser,
  signOutUser,
  registerUser
} from '../actions/authTokenActions';
import { checkIdentity } from '../actions/identityActions';
import {
  setContentView,
  setLoading,
  unsetLoading,
  setNotification
} from '../actions/uiActions';

import { SHARE_MOVIE } from '../constants/contentViews';

import Header from '../components/Header';

const HeaderContainer = ({
  currentUser, loginAction, logoutAction, toShareMovieView
}) => (
  <Header
    currentUser={currentUser}
    loginAction={loginAction}
    logoutAction={logoutAction}
    toShareMovieView={toShareMovieView}
  />
);

HeaderContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired,
  toShareMovieView: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.get('userAuth').currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ({ email, password }) => {
    setLoading();
    dispatch(checkIdentity(email)).then(() => {
      dispatch(signInUser({ email, password })).then(() => {
        unsetLoading();
      }).catch(() => {
        dispatch(setNotification('Error while siging in'));
        unsetLoading();
      });
    }).catch(() => {
      dispatch(registerUser({ email, password })).then(() => {
        unsetLoading();
      }).catch(() => {
        dispatch(setNotification('Error while registering new account'));
        unsetLoading();
      });
    });
  },
  logoutAction: () => {
    setLoading();
    dispatch(signOutUser()).then(() => {
      unsetLoading();
    });
  },
  toShareMovieView: () => dispatch(setContentView(SHARE_MOVIE)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
