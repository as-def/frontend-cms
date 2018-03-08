import React, { Component } from 'react';
import './Text.css';
import TextView from './TextView.js';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing
    };
  }

  componentWillMount() {
  }
  
  componentDidMount() {
  }

  toggleEdit() {
    if(this.state.editing) {
      this.props.updateText(this.props.idx, this.textView.getText());
    }
    let newState = {editing: !this.state.editing};
    this.setState(newState);
  }

  render() {
    let view = (
      <div className="TextContainer"
          style={{
              borderStyle: this.props.editmode ? 'solid': 'none'
          }}>

          <TextView editable={this.state.editing && this.props.editmode}
              ref={(textView) => {this.textView = textView;}}
              text={this.props.text}/>

          <div className="TextControls"
              style={{
                display: (this.props.editmode) ? 'block':'none'
              }}>
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
