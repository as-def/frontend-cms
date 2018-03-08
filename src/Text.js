import React, { Component } from 'react';
import './Text.css';
import TextView from './TextView.js';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }
  
  componentDidMount() {
  }

  save() {
    console.log('save');
    this.props.updateText(this.props.idx, this.textView.getText());
  }

  render() {
    let view = (
      <div className="TextContainer"
          style={{
              borderStyle: this.props.editmode ? 'solid': 'none'
          }}>

          <TextView editable={this.props.editmode}
              ref={(textView) => {this.textView = textView;}}
              text={this.props.text}
              save={this.save.bind(this)}
          />

          <div className="TextControls"
              style={{
                display: (this.props.editmode) ? 'block':'none'
              }}>
        </div>
      </div>
    );
    return view;
  }
}
Text.numberTextElements = 0;

export default Text;
