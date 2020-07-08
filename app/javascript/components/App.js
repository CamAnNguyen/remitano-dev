import React from "react";
import PropTypes from "prop-types";

import HeaderContainer from '../containers/HeaderContainer';
import ContentContainer from '../containers/ContentContainer';

function App() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <ContentContainer />
    </React.Fragment>
  );
}

App.propTypes = {
  greeting: PropTypes.string
};

export default App;
