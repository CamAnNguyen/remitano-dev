import React from 'react';
import { Provider } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import reduxStore from '../store/reduxStore';
import { verifyCredentials } from '../actions/authTokenActions';

import ContentContainer from '../containers/ContentContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LoadingModalContainer from '../containers/LoadingModalContainer';
import NotificationContainer from '../containers/NotificationContainer';

export const store = reduxStore();
verifyCredentials(store);

function App() {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Row className="main-header">
          <HeaderContainer />
        </Row>
        <Row className="app-notification">
          <NotificationContainer />
        </Row>
        <Row className="main-content">
          <ContentContainer />
        </Row>
        <Row>
          <LoadingModalContainer />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
