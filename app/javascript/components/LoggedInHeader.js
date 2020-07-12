import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button, Form } from 'react-bootstrap';

function LoggedInHeader({ currentUser, logoutAction, toShareMovieView }) {
  const logoutFunc = useCallback(() => logoutAction(), []);
  const welcomeText = `Welcome ${currentUser.attributes.email}`;

  return (
    <Form inline className="logged-in-header">
      <Button
        variant="secondary"
        size="sm"
        className="mb-2"
        onClick={logoutFunc}
      >
        Logout
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="mb-2"
        onClick={toShareMovieView}
      >
        Share a movie
      </Button>
      <Form.Label style={{ marginRight: '20px', marginBottom: '5px' }}>
        {welcomeText}
      </Form.Label>
    </Form>
  );
}

LoggedInHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired,
  toShareMovieView: PropTypes.func.isRequired,
};

export default LoggedInHeader;
