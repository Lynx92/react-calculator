import React, { Component } from "react";
import '../styles/cal-btn.css'

export class CalBtn extends Component {
  render() {
  return <button onClick={() => this.props.touchThis(this.props.number)}>{this.props.number}</button>;
  }
}

export default CalBtn;
