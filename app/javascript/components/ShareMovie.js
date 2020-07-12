import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

function ShareMovie({ shareMovie }) {
  return (
    <>
      SHARE MOVIE
    </>
  );
}

ShareMovie.propTypes = {
  shareMovie: PropTypes.func.isRequired,
};

export default ShareMovie;
