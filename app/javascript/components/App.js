import React from 'react';
import { Provider } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import reduxStore from '../store/reduxStore';
import { verifyCredentials } from '../actions/authTokenActions';

import HeaderContainer from '../containers/HeaderContainer';
import ContentContainer from '../containers/ContentContainer';
import LoadingModalContainer from '../containers/LoadingModalContainer';

export const store = reduxStore();
verifyCredentials(store);

function App() {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Row className="main-header">
          <HeaderContainer />
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
