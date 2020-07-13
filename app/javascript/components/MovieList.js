import React from 'react';
import PropTypes from 'prop-types';

import { Map } from 'immutable';

import Movie from './Movie';

function MovieList({ movies, voteUp, voteDown }) {
  const movieList = movies.entrySeq().map((valueArray) => {
    const movie = valueArray[1].toJS();

    return (
      <Movie
        key={movie.id}
        movie={movie}
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
  movies: PropTypes.instanceOf(Map),
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: Map()
};

export default MovieList;
