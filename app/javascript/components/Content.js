import React from 'react';
import PropTypes from 'prop-types';

import { Map } from 'immutable';

import { MOVIE_LIST, SHARE_MOVIE } from '../constants/contentViews';

import MovieList from './MovieList';
import ShareMovie from './ShareMovie';

function Content({
  isSignedIn, movies, movieRatings, contentView, shareMovie, voteUp, voteDown
}) {
  const views = {
    [MOVIE_LIST]: (
      <MovieList
        isSignedIn={isSignedIn}
        movies={movies}
        movieRatings={movieRatings}
        voteUp={voteUp}
        voteDown={voteDown}
      />
    ),
    [SHARE_MOVIE]: (
      <ShareMovie shareMovie={shareMovie} />
    )
  };
  const currentView = views[contentView] || <span />;

  return currentView;
}

Content.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  movies: PropTypes.instanceOf(Map).isRequired,
  movieRatings: PropTypes.instanceOf(Map).isRequired,
  contentView: PropTypes.string.isRequired,
  shareMovie: PropTypes.func.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default Content;
