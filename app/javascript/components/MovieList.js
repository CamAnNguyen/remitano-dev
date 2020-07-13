import React from 'react';
import PropTypes from 'prop-types';

import { Map } from 'immutable';

import Movie from './Movie';

function MovieList({
  isSignedIn, movies, movieRatings, voteUp, voteDown
}) {
  const movieList = movies.entrySeq().map((valueArray) => {
    const movie = valueArray[1].toJS();
    const like = movieRatings.get(movie.id);

    return (
      <Movie
        key={movie.id}
        isSignedIn={isSignedIn}
        movie={movie}
        like={like}
        voteUp={voteUp}
        voteDown={voteDown}
      />
    );
  });

  return (
    <>
      {movieList}
    </>
  );
}

MovieList.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  movies: PropTypes.instanceOf(Map),
  movieRatings: PropTypes.instanceOf(Map),
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: Map(),
  movieRatings: Map()
};

export default MovieList;
