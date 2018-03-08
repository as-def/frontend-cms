import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js'

class App extends Component {
  constructor(props) {
    super(props);
    let texts = [{text: 'Hello<br/>there'}, {text: 'hello, hello'}]
    this.state = {};
    this.state.editmode = true;
    this.state.texts = texts;
    this.textComponents = [];
  }

  componentWillMount() {
  }

  toggleEdit() {
    let newState = {editmode: !this.state.editmode};
    this.setState(newState);
  }

  updateText(idx, text) {
    let texts = this.state.texts;
    texts[idx] = {text: text};
    this.setState({texts: texts});
  }

  save() {
    // save texts
    let persistence = [];
    this.state.texts.forEach(function(text) {
      persistence.push({
        text: text.text
      });
    });
    console.log('Persistence data:');
    console.log(persistence);
  }

  render() {
    let self = this;
    let showedit = this.state.editmode;

    let view = (
      <div className="App">
        <div>
            <button onClick={this.toggleEdit.bind(this)}>
                {this.state.editmode ? "Preview" : "Edit"}
            </button>
            <button onClick={this.save.bind(this)}>
                Save
            </button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.texts.map(function(text, idx) {
          let comp =
            <Text editmode={showedit}
                text={text.text}
                idx={idx}
                key={idx}
                updateText={self.updateText.bind(self)}
                editing="false"/>;
          return comp;
        })}
      </div>
    );
    return view;
  }
}

export default App;
