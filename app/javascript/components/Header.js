import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { Col } from 'react-bootstrap';

import LoggedInHeader from './LoggedInHeader';
import GuestHeader from './GuestHeader';

function Header({
  currentUser, loginAction, isSignedIn
}) {
  let rightHeader = (<GuestHeader loginAction={loginAction} />);

  if (isSignedIn) {
    rightHeader = (
      <LoggedInHeader
        currentUser={currentUser}
      />
    );
  }

  return (
    <>
      <Col sm={4}>
        <i className="fa fa-home fa-3x" />
        <span className="main-title">
          <b>FUNNY MOVIES</b>
        </span>
      </Col>
      <Col sm={8} className="main-header-right">
        {rightHeader}
      </Col>
    </>
  );
}

Header.propTypes = {
  currentUser: PropTypes.instanceOf(Map).isRequired,
  loginAction: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool
};

Header.defaultProps = {
  isSignedIn: false
};

export default Header;
