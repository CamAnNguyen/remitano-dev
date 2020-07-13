import React from 'react';
import PropTypes from 'prop-types';

import { Map } from 'immutable';

import { MOVIE_LIST, SHARE_MOVIE } from '../constants/contentViews';

import MovieList from './MovieList';
import ShareMovie from './ShareMovie';

function Content({
  movies, contentView, shareMovie, voteUp, voteDown
}) {
  const views = {
    [MOVIE_LIST]: (
      <MovieList
        movies={movies}
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
  movies: PropTypes.instanceOf(Map).isRequired,
  contentView: PropTypes.string.isRequired,
  shareMovie: PropTypes.func.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default Content;
