import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

import LoggedInHeader from './LoggedInHeader';
import GuestHeader from './GuestHeader';

function Header({
  currentUser, loginAction, logoutAction, toShareMovieView
}) {
  let rightHeader = (<GuestHeader loginAction={loginAction} />);

  if (currentUser.isSignedIn) {
    rightHeader = (
      <LoggedInHeader
        currentUser={currentUser}
        logoutAction={logoutAction}
        toShareMovieView={toShareMovieView}
      />
    );
  }

  return (
    <>
      <Col sm={4}>
        <i className="fas fa-home fa-3x" />
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
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired,
  toShareMovieView: PropTypes.func.isRequired,
};

export default Header;
