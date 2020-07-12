import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'immutable';

import { MOVIE_LIST, SHARE_MOVIE } from '../constants/contentViews';

import MovieList from './MovieList';
import ShareMovie from './ShareMovie';

function Content({
  movies, contentView, shareMovie, voteUp, voteDown
}) {
  const contentList = {
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

  return contentList[contentView];
}

Content.propTypes = {
  movies: PropTypes.instanceOf(List).isRequired,
  movieRatings: PropTypes.instanceOf(List).isRequired,
  contentView: PropTypes.string.isRequired,
  shareMovie: PropTypes.func.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default Content;
