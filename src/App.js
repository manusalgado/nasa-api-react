import React, { Component } from 'react';
import AstronomyContainer from './components/AstronomyContainer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AstronomyContainer />
      </div>
    );
  }
}

export default App;
