import React, { Component } from 'react';
import './TextView.css';

class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.text};
  }
  componentWillMount() {
  }
  componentDidMount() {
    this.textdiv.innerHTML = this.props.text;
  }
  getText() {
    return this.textdiv.innerHTML;
  }
  render() {
    let classes = "TextView";
    if(this.props.editable) {
      classes += " TextView-edit";
    }
    let view = 
        <div className={classes} contentEditable={this.props.editable}
            ref={(div) => {this.textdiv = div;}}
            style={{
            }}
        >
        </div>;
    return view;
  }
}

export default TextView;
