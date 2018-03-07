import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.editmode = true;
  }

  componentWillMount() {
  }

  toggleEdit() {
    let newState = {editmode: !this.state.editmode};
    this.setState(newState);
  }

  render() {
    let showedit = this.state.editmode;
    let view = (
      <div className="App">
        <div>
            <button onClick={this.toggleEdit.bind(this)}>
                {this.state.editmode ? "Preview" : "Edit"}
            </button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <Text editmode={showedit} text="Hello<br/><br/>there" editing="true"/>
        <Text editmode={showedit} text="hello, hello"/>
      </div>
    );
    return view;
  }
}

export default App;
