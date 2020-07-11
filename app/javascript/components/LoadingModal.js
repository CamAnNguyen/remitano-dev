import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const LoadingModal = ({ loading }) => (
  <Modal className="loading-modal" animation show={loading}>
    <i className="fas fa-sync-alt fa-spin fa-3x fa-fw" />
  </Modal>
);

LoadingModal.propTypes = {
  loading: PropTypes.bool,
};

LoadingModal.defaultProps = {
  loading: false
};

export default LoadingModal;
