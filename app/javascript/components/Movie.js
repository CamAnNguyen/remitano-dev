import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Movie({ movie, voteUp, voteDown }) {
  return (
    <div className="single-movie-container">
      <ReactPlayer
        className="movie-player"
        url={movie.youtube_url}
        width="480px"
      />
      <div className="movie-information">
        <div>
          <div className="movie-vote-block">
            <i className="fas fa-thumbs-up fa-2x" />
            <i className="fas fa-thumbs-down fa-2x" />
          </div>
          <div className="movie-title">
            {movie.title || 'Movie Title'}
          </div>
          <div className="creator-email">
            Shared by:
            &nbsp;
            {movie.email}
          </div>
          <div>
            <span style={{ width: '20px' }}>
              {movie.vote_up}
            </span>
            <i className="far fa-thumbs-up" />
            &nbsp;&nbsp;
            {movie.vote_down}
            <i className="far fa-thumbs-down" />
          </div>
        </div>
        <div>
          <div>Description:</div>
          <div>{movie.description}</div>
        </div>
      </div>
      <div className="movie-vote-block">
        <div>(un-voted)</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default Movie;
