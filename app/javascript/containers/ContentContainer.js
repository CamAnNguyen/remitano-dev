import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../actions/userActions';
import * as types from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

import Content from '../components/Content';

const ContentContainer = ({ currentUser, loginAction }) => (
  <Content currentUser={currentUser} loginAction={loginAction} />
);

ContentContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.get('movies'),
  movieRatings: state.get('movieRatings')
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => {
    dispatch({ type: types.SET_LOADING });
    dispatch(login(email)).then(() => dispatch({
      type: types.UNSET_LOADING
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentContainer);
