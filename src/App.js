import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js'

class App extends Component {
  render() {
    let view = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          check
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Text text="Hello"/>
        <Text text="hello, hello"/>
      </div>
    );
    return view;
  }
}

export default App;
