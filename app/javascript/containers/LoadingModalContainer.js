import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingModal from '../components/LoadingModal';

const LoadingModalContainer = ({ loading }) => <LoadingModal loading={loading} />;

LoadingModalContainer.propTypes = {
  loading: PropTypes.bool
};

LoadingModalContainer.defaultProps = {
  loading: false
};

const mapStateToProps = (state) => ({
  loading: state.get('ui').get('loading'),
});

export default connect(mapStateToProps)(LoadingModalContainer);
