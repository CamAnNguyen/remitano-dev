import * as types from '../constants/actionTypes';

export const setContentView = (view) => (dispatch) => dispatch({
  type: types.SET_CONTENT_VIEW,
  contentView: view
});

export const setLoading = () => (dispatch) => dispatch({
  type: types.SET_LOADING,
  loading: true
});

export const unsetLoading = () => (dispatch) => dispatch({
  type: types.UNSET_LOADING,
  loading: false
});

export const setNotification = (notification) => (dispatch) => dispatch({
  type: types.SET_NOTIFICATION,
  notification,
});

export const setNotificationStyle = (notificationStyle) => (dispatch) => dispatch({
  type: types.SET_NOTIFICATION,
  notificationStyle,
});
