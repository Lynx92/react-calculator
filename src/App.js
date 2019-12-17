import React, { Component } from "react";
import CalBtn from "./components/CalBtn";
import "./styles/calculator.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNumber: 0,
      showFloat: [],
      isResult: false
    };
  }

  receiveNumber = e => {
    if (
      this.state.showNumber === 0 ||
      this.state.showNumber === "0" ||
      this.state.isResult === true
    ) {
      if (this.state.showFloat.length !== 0) {
        this.setState({ showFloat: this.state.showFloat + e });
      } else {
        this.setState({ showFloat: e });
      }

      this.setState({ showNumber: e, isResult: false });
    } else {
      this.setState({
        showNumber: this.state.showNumber + e,
        showFloat: this.state.showFloat + e
      });
    }
  };

  clearScreen = () => {
    this.setState({ showNumber: 0, showFloat: [] });
  };

  operate = e => {
    if (e === "+") {
      this.setState({
        showNumber: 0,
        showFloat: this.state.showFloat + e
      });
    } else if (e === "-") {
      this.setState({
        showNumber: 0,
        showFloat: this.state.showFloat + e
      });
    } else if (e === "*") {
      this.setState({
        showNumber: 0,
        showFloat: this.state.showFloat + e
      });
    } else if (e === "/") {
      this.setState({
        showNumber: 0,
        showFloat: this.state.showFloat + e
      });
    }
  };

  calculate = () => {
    let { showFloat } = this.state;
    this.setState({
      showNumber: eval(showFloat),
      showFloat: [],
      isResult: true
    });
  };

  render() {
    return (
      <div className="container">
        <div className="border-cal">
          <div className="screen">
            <span className="float">{this.state.showFloat}</span>
            <div className="number-screen">{this.state.showNumber}</div>
          </div>
          <div className="btns">
            <div className="rows">
              <CalBtn touchThis={this.clearScreen} number="C" size="size-3" />
              <CalBtn touchThis={this.operate} number="/" size="size-1" />
            </div>
            <div className="rows">
              <CalBtn touchThis={this.receiveNumber} number="7" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="8" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="9" size="size-1" />
              <CalBtn touchThis={this.operate} number="*" size="size-1" />
            </div>
            <div className="rows">
              <CalBtn touchThis={this.receiveNumber} number="4" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="5" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="6" size="size-1" />
              <CalBtn touchThis={this.operate} number="-" size="size-1" />
            </div>
            <div className="rows">
              <CalBtn touchThis={this.receiveNumber} number="1" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="2" size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="3" size="size-1" />
              <CalBtn touchThis={this.operate} number="+" size="size-1" />
            </div>
            <div className="rows">
              <CalBtn touchThis={this.receiveNumber} number="." size="size-1" />
              <CalBtn touchThis={this.receiveNumber} number="0" size="size-1" />
              <CalBtn touchThis={this.calculate} number="=" size="size-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
