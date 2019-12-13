import React, { Component } from "react";
import CalBtn from "./components/CalBtn";
import "./styles/calculator.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      showNumber: 0,
      numberA: 0,
      numberB: 0,
      result: 0
    };
  }

  receiveNumber = e => {
    if (this.state.showNumber === 0) {
      this.setState({ showNumber: e });
    } else {
      this.setState({ showNumber: this.state.showNumber + e });
    }
  };

  clearScreen = () => {
    this.setState({ showNumber: 0 });
  };

  operate = e => {
    if (e === "+") {
      this.setState({ numberA: this.state.showNumber, showNumber: 0 });
    } else if (e === "-") {
      this.setState({ numberA: this.state.showNumber, showNumber: 0 });
    } else if (e === "*") {
      this.setState({ numberA: this.state.showNumber, showNumber: 0 });
    } else if (e === "/") {
      this.setState({ numberA: this.state.showNumber, showNumber: 0 });
    }
  };

  calculate = e => {};

  render() {
    return (
      <div className="container">
        <div className="border-cal">
          <div className="screen">
            <div className="number-screen">{this.state.showNumber}</div>
          </div>
          <div className="btns">
            <div>
              <CalBtn touchThis={this.receiveNumber} number="7" />
              <CalBtn touchThis={this.receiveNumber} number="8" />
              <CalBtn touchThis={this.receiveNumber} number="9" />
              <CalBtn touchThis={this.operate} number="+" />
            </div>
            <div>
              <CalBtn touchThis={this.receiveNumber} number="4" />
              <CalBtn touchThis={this.receiveNumber} number="5" />
              <CalBtn touchThis={this.receiveNumber} number="6" />
            </div>
            <div>
              <CalBtn touchThis={this.receiveNumber} number="1" />
              <CalBtn touchThis={this.receiveNumber} number="2" />
              <CalBtn touchThis={this.receiveNumber} number="3" />
            </div>
            <div>
              <CalBtn touchThis={this.receiveNumber} number="0" />
              <CalBtn touchThis={this.clearScreen} number="C" />
              <CalBtn touchThis={this.receiveNumber} number="AC" />
            </div>
            <div>
              <CalBtn touchThis={this.operate} number="Calculate" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
