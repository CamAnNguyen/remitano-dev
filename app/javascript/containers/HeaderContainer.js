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

import { fetchRatings, clearRatings } from '../actions/movieRatingActions';

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
    dispatch(setLoading());
    dispatch(checkIdentity(email)).then(() => {
      dispatch(signInUser({ email, password })).then(() => (
        dispatch(fetchRatings()).then(() => dispatch(unsetLoading()))
      )).catch(() => {
        dispatch(setNotification('Error while siging in'));
        dispatch(unsetLoading());
      });
    }).catch(() => {
      dispatch(registerUser({ email, password })).then(() => {
        dispatch(unsetLoading());
      }).catch(() => {
        dispatch(setNotification('Error while registering new account'));
        dispatch(unsetLoading());
      });
    });
  },
  logoutAction: () => {
    dispatch(setLoading());
    dispatch(signOutUser()).then(() => {
      dispatch(clearRatings());
      dispatch(unsetLoading());
    });
  },
  toShareMovieView: () => dispatch(setContentView(SHARE_MOVIE)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
