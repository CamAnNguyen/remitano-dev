import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { login } from '../actions/userActions';
import * as types from '../constants/actionTypes';

import Header from '../components/Header';

const HeaderContainer = ({ currentUser, loginAction }) => (
  <Header currentUser={currentUser} loginAction={loginAction} />
);

// eslint-disable-next-line react/forbid-prop-types
HeaderContainer.propTypes = {
  currentUser: PropTypes.instanceOf(Map).isRequired,
  loginAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.get('currentUser')
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => {
    dispatch({ type: types.SET_LOADING });
    dispatch(login(email, password)).then(() => dispatch({
      type: types.UNSET_LOADING
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
