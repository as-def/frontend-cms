import React, { Component } from 'react';
import './App.css';
import Text from './Text.js'

class App extends Component {
  constructor(props) {
    super(props);
    let texts = [{text: 'Hello<br/>there'}, {text: 'hello, hello'}]

    // define default state in case local storage is empty
    this.state = {}
    this.state.editmode = true;
    this.state.texts = texts;

    let savedState = {};
    try {
      savedState = JSON.parse(localStorage.getItem('appState'));
    }
    catch(e) {
    }
    this.state.texts = savedState.texts || this.state.texts;
    this.textComponents = [];
  }

  componentWillMount() {
  }
  
  componentDidMount() {
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
    localStorage.setItem('appState', JSON.stringify(this.state));
    console.log('Persistence data:');
    console.log(persistence);
    window.location.pathname='/';
  }

  render() {
    let self = this;
    let edit = (window.location.pathname === '/edit');
    let showedit = this.state.editmode && edit;

    let view = (
      <div className="App">
        <div className="App-controls"
             style={{display: edit ? 'block' : 'none'}}>
            <button onClick={this.toggleEdit.bind(this)}
                    style={{marginRight: "0.5em"}}>
                {this.state.editmode ? "Preview" : "Edit"}
            </button>
            <button onClick={this.save.bind(this)}>
                Save
            </button>
        </div>
        <header className="App-header">
          <h1 className="App-title">frontend cms</h1>
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
