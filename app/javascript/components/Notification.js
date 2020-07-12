import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'react-bootstrap';

function Notification({ notification, notificationStyle, clearNotification }) {
  const show = !!(notification.trim());

  return (
    <Alert
      className="notification-alert"
      variant={notificationStyle}
      onClose={clearNotification}
      show={show}
      dismissible
    >
      <div>{notification}</div>
    </Alert>
  );
}

Notification.propTypes = {
  notification: PropTypes.string,
  notificationStyle: PropTypes.string,
  clearNotification: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  notification: '',
  notificationStyle: ''
};

export default Notification;
