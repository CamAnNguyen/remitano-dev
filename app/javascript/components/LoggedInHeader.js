import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { Button, Form, FormControl } from 'react-bootstrap';

function LoggedInHeader({ currentUser, logoutAction }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginFunc = useCallback(() => logoutAction(), []);

  return (
    <Form inline>
      <Button
        variant="secondary"
        size="sm"
        className="mb-2"
        onClick={loginFunc}
      >
        Logout
      </Button>
      <Form.Label htmlFor="headerFormInputPassword" srOnly>
        Password
      </Form.Label>
      <FormControl
        id="headerFormInputPassword"
        ref={passwordRef}
        type="password"
        size="sm"
        placeholder="Password"
        aria-label="Password"
        className="mb-2 mr-sm-2"
      />
      <Form.Label htmlFor="headerFormInputEmail" srOnly>
        Email
      </Form.Label>
      <FormControl
        id="headerFormInputEmail"
        ref={emailRef}
        size="sm"
        placeholder="Email"
        aria-label="Email"
        className="mb-2 mr-sm-2"
      />
    </Form>
  );
}

LoggedInHeader.propTypes = {
  currentUser: PropTypes.instanceOf(Map).isRequired,
};

export default LoggedInHeader;
