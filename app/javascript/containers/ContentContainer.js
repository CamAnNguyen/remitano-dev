import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { List } from 'immutable';

import {
  setContentView,
  setLoading,
  unsetLoading
} from '../actions/uiActions';
import { shareMovie } from '../actions/movieActions';
import { voteMovie } from '../actions/movieRatingActions';

import { MOVIE_LIST } from '../constants/contentViews';

import Content from '../components/Content';

const ContentContainer = ({
  contentView, movies, movieRatings, shareMovie, voteUp, voteDown
}) => (
  <Content
    contentView={contentView}
    movies={movies}
    movieRatings={movieRatings}
    shareMovie={shareMovie}
    voteUp={voteUp}
    voteDown={voteDown}
  />
);

ContentContainer.propTypes = {
  movies: PropTypes.instanceOf(List).isRequired,
  movieRatings: PropTypes.instanceOf(List).isRequired,
  contentView: PropTypes.string.isRequired,
  shareMovie: PropTypes.func.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.get('movies'),
  movieRatings: state.get('movieRatings'),
  contentView: state.get('ui').get('contentView')
});

const mapDispatchToProps = (dispatch) => ({
  voteUp: () => dispatch(voteMovie(true)),
  voteDown: () => dispatch(voteMovie(false)),
  shareMovie: (youtubeURL) => {
    setLoading();
    dispatch(shareMovie(youtubeURL)).then(() => {
      setContentView(MOVIE_LIST);
      unsetLoading();
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentContainer);
