import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setNotification } from '../actions/uiActions';
import Notification from '../components/Notification';

const NotificationContainer = ({
  notification, notificationStyle, clearNotification
}) => (
  <Notification
    notification={notification}
    clearNotification={clearNotification}
    notificationStyle={notificationStyle}
  />
);

NotificationContainer.propTypes = {
  notification: PropTypes.string,
  notificationStyle: PropTypes.string,
  clearNotification: PropTypes.func.isRequired,
};

NotificationContainer.defaultProps = {
  notification: '',
  notificationStyle: ''
};

const mapStateToProps = (state) => ({
  notification: state.get('ui').get('notification'),
  notificationStyle: state.get('ui').get('notificationStyle'),
});

const mapDispatchToProps = (dispatch) => ({
  clearNotification: () => dispatch(setNotification(''))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
