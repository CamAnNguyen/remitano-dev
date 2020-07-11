import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import * as types from '../constants/actionTypes';

import Content from '../components/Content';

const ContentContainer = ({ movies, movieRatings }) => (
  <Content movies={movies} movieRatings={movieRatings} />
);

ContentContainer.propTypes = {
  movies: PropTypes.instanceOf(List).isRequired,
  movieRatings: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = (state) => ({
  movies: state.get('movies'),
  movieRatings: state.get('movieRatings')
});

const mapDispatchToProps = (dispatch) => ({
  voteMovie: (like) => {
    dispatch({ type: types.SET_LOADING });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentContainer);
