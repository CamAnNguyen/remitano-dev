import React from 'react';
import { Provider } from 'react-redux';

import HeaderContainer from '../containers/HeaderContainer';
import ContentContainer from '../containers/ContentContainer';
import reduxStore from '../store/reduxStore';

export const store = reduxStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <HeaderContainer />
        <ContentContainer />
      </>
    </Provider>
  );
}

export default App;
