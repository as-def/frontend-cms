import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      editing: false
    };
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    let view = (
      <div className="TextContainer">
        <div className="Text">
            {this.state.text}
        </div>
        <div className="TextControls">
          <button onClick={this.toggleEdit.bind(this)}>
            {this.state.editing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    );
    return view;
  }
}

export default Text;
