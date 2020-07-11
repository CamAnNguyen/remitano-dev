import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  signInUser, signOutUser, registerUser
} from '../actions/authTokenActions';
import { checkIdentity } from '../actions/identityActions';
import { shareMovie } from '../actions/movieActions';
import * as types from '../constants/actionTypes';

import Header from '../components/Header';

const HeaderContainer = ({
  currentUser, loginAction, logoutAction, shareMovie
}) => (
  <Header
    currentUser={currentUser}
    loginAction={loginAction}
    logoutAction={logoutAction}
    shareMovie={shareMovie}
  />
);

HeaderContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired,
  shareMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.get('userAuth').currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ({ email, password }) => {
    dispatch({ type: types.SET_LOADING });
    dispatch(checkIdentity(email)).then((apiRes) => {
      if (apiRes.response.status === 200) {
        dispatch(signInUser({ email, password })).then(() => {
          dispatch({ type: types.UNSET_LOADING });
        }).catch((err) => {
          console.log(err);
        });
      } else {
        dispatch(registerUser({ email, password })).then(() => {
          dispatch({ type: types.UNSET_LOADING });
        }).catch((err) => {
          console.log(err);
        });
      }
    });
  },
  logoutAction: () => {
    dispatch({ type: types.SET_LOADING });
    dispatch(signOutUser()).then(() => {
      dispatch({ type: types.UNSET_LOADING });
    });
  },
  shareMovie: () => {
    dispatch({ type: types.SET_LOADING });
    dispatch(shareMovie()).then(() => {
      dispatch({ type: types.UNSET_LOADING });
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
