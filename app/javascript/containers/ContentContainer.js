import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Map } from 'immutable';

import {
  setContentView,
  setLoading,
  unsetLoading
} from '../actions/uiActions';

import { fetchMovies, shareMovie } from '../actions/movieActions';
import { fetchRatings, voteMovie } from '../actions/movieRatingActions';

import { MOVIE_LIST } from '../constants/contentViews';

import Content from '../components/Content';

const ContentContainer = ({
  isSignedIn, movies, movieRatings, fetchMovies, fetchRatings,
  contentView, shareMovie, voteUp, voteDown
}) => {
  useEffect(() => fetchMovies(), []);
  useEffect(() => {
    if (isSignedIn) fetchRatings();
  }, [isSignedIn]);

  return (
    <Content
      isSignedIn={isSignedIn}
      contentView={contentView}
      movies={movies}
      movieRatings={movieRatings}
      shareMovie={shareMovie}
      voteUp={voteUp}
      voteDown={voteDown}
    />
  );
};

ContentContainer.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  movies: PropTypes.instanceOf(Map).isRequired,
  movieRatings: PropTypes.instanceOf(Map).isRequired,
  contentView: PropTypes.string.isRequired,
  shareMovie: PropTypes.func.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  fetchRatings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isSignedIn: state.get('userAuth').currentUser.isSignedIn,
  movies: state.get('movies'),
  movieRatings: state.get('movieRatings'),
  contentView: state.get('ui').get('contentView')
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  fetchRatings: () => dispatch(fetchRatings()),
  voteUp: (movieId) => dispatch(voteMovie(movieId, true)),
  voteDown: (movieId) => dispatch(voteMovie(movieId, false)),
  shareMovie: (youtubeURL) => {
    dispatch(setLoading());
    dispatch(shareMovie(youtubeURL)).then(() => {
      dispatch(setContentView(MOVIE_LIST));
      dispatch(dispatch(unsetLoading()));
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentContainer);
