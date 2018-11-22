import React, { Component } from 'react';
import Header from "./components/Calendar/Header";
import Main from "./components/Calendar/Main";

class App extends Component {
  render() {    
    return (
      <React.Fragment>
        <Header title="Set Scedule"/>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;
