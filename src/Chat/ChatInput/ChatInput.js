import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  updateMsg = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };

  handlerClick = () => {
    this.props.handleMessage(this.state.msg);
    this.setState({
      msg: '',
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleMessage(this.state.msg);
      this.setState({
        msg: '',
      });
    }
  };

  render() {
    return (
      <footer className="ChatInput">
        <input
          type="text"
          onChange={this.updateMsg}
          value={this.state.msg}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" className="btn-submit" onClick={this.handlerClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
