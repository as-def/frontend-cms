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
    this.props.updateText(this.props.idx, this.textView.getText());
  }

  render() {
    let self = this;
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
              <button onClick={function(){self.props.move(self.props.idx, false)}}
                    style={{marginRight: "0.5em"}}>
                Up
            </button>
            <button onClick={function(){self.props.move(self.props.idx, true)}}
                    style={{marginRight: "0.5em"}}>
                Down
            </button>
            <button onClick={function(){self.props.add(self.props.idx + 1)}}
                    style={{marginRight: "0.5em"}}>
                Append
            </button>
          </div>
      </div>
    );
    return view;
  }
}
Text.numberTextElements = 0;

export default Text;
