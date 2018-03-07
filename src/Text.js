import React, { Component } from 'react';
import './Text.css';
import TextView from './TextView.js';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [].concat(this.props.text),
      editing: this.props.editing
    };
  }

  componentWillMount() {
  }
  
  componentDidMount() {
    //this.textView.innerHTML = this.state.text;
  }

  toggleEdit() {
    let newState = {editing: !this.state.editing};
    // switch to display
    if(this.state.editing) {
       //newState.text = this.textView.innerHTML;
    }
    // switch to edit
    this.setState(newState);
  }

  render() {
    let view = (
      <div className="TextContainer"
          style={{
              borderStyle: this.props.editmode ? 'none': 'none'
          }}>

        <TextView editable={this.state.editing && this.props.editmode} text={this.state.text}/>

        <div className="TextControls"
            style={{
              display: (this.props.editmode) ? 'block':'none'
            }}
        >
          <button onClick={this.toggleEdit.bind(this)}>
            {this.state.editing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    );
    return view;
  }
}
Text.numberTextElements = 0;

export default Text;
