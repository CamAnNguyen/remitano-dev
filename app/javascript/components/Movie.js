import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

function Movie({
  isSignedIn, movie, like,
  voteUp, voteDown
}) {
  let voteIcon = <span />;
  let voteText = '';

  const voteUpFunc = useCallback(() => voteUp(movie.id), [voteUp, movie.id]);
  const voteDownFunc = useCallback(() => voteDown(movie.id), [voteDown, movie.id]);

  if (isSignedIn) {
    voteText = '(un-voted)';
    if (like === undefined) {
      voteIcon = (
        <>
          <button type="button" onClick={voteUpFunc}>
            <i className="far fa-thumbs-up fa-2x" />
          </button>
          <button type="button" onClick={voteDownFunc}>
            <i className="far fa-thumbs-down fa-2x" />
          </button>
        </>
      );
    } else {
      if (like) {
        voteText = '(voted up)';
        voteIcon = (<i className="fas fa-thumbs-up fa-2x" />);
      } else {
        voteText = '(voted down)';
        voteIcon = (<i className="fas fa-thumbs-down fa-2x" />);
      }
    }
  }

  return (
    <div className="single-movie-container">
      <ReactPlayer
        className="movie-player"
        url={movie.youtube_url}
        width="480px"
      />
      <div className="movie-information">
        <div>
          <div className="movie-vote-action-block">
            {voteIcon}
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
      <div className="movie-vote-text-block">
        {voteText}
      </div>
    </div>
  );
}

Movie.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  like: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

Movie.defaultProps = {
  like: undefined
};

export default Movie;
