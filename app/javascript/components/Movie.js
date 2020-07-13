import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

function Movie({
  isSignedIn, movie, like,
  voteUp, voteDown
}) {
  let voteUpIcon = <span />;
  let voteDownIcon = <span />;
  let voteText = '';

  const voteUpFunc = useCallback(() => voteUp(movie.id), [voteUp, movie.id]);
  const voteDownFunc = useCallback(() => voteDown(movie.id), [voteDown, movie.id]);

  if (isSignedIn) {
    const faStyle = like === undefined ? 'far' : 'fas';
    voteUpIcon = (
      <button type="button" onClick={voteUpFunc}>
        <i className={`${faStyle} fa-thumbs-up fa-2x`} />
      </button>
    );
    voteDownIcon = (
      <button type="button" onClick={voteDownFunc}>
        <i className={`${faStyle} fa-thumbs-down fa-2x`} />
      </button>
    );

    voteText = '(un-voted)';
    if (like !== undefined) {
      voteText = like ? '(voted up)' : '(voted down)';
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
            {(like === undefined || like === true) && voteUpIcon}
            {(like === undefined || like === false) && voteDownIcon}
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
