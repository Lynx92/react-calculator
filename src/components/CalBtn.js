import React, { Component } from "react";
import "../styles/cal-btn.css";

class CalBtn extends Component {
  render() {
    return (
      <button
        className={`calc-button ${this.props.size}`}
        onClick={() => this.props.touchThis(this.props.number)}
      >
        {this.props.number}
      </button>
    );
  }
}

export default CalBtn;
