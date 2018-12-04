import React, { Component } from 'react';
import { Header, ImageGrid } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageGrid />
      </div>
    );
  }
}

export default App;
