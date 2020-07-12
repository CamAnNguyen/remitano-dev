import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'immutable';

import { Container, Col, Row } from 'react-bootstrap';

import Movie from './Movie';

function MovieList({
  movies, voteMovie
}) {
  const movieList = movies.map((movie) => (
    <Movie key={movie.id} movie={movie} voteMovie={voteMovie} />
  ));

  return (
    <Container>
      <Row>
        <Col>
          MOVIE LIST
        </Col>
      </Row>
    </Container>
  );
}

MovieList.propTypes = {
  movies: PropTypes.instanceOf(List),
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: List()
};

export default MovieList;
