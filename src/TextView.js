import React, { Component } from 'react';
import './TextView.css';

class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
  }
  render() {
    let classes = "TextView";
    if(this.props.editable) {
      classes += " TextView-edit";
    }
    let view = 
        <div className={classes} contentEditable={this.props.editable}
            ref={(textView) => {this.textView = textView;}}
            style={{
            }}
        >
        </div>;
    return view;
  }
}

export default TextView;
