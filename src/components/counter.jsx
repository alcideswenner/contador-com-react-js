import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="center">
        <center>
          <h1>{this.state.count}</h1>{" "}
          <button onClick={this.increment.bind(this)}>+</button>
          <button onClick={this.decrement.bind(this)}>-</button>
        </center>
      </div>
    );
  }
}

export default Counter;
