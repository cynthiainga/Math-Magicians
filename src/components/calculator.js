import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-wrapper">
        <button type="button" className="btn">AC</button>
        <button type="button" className="btn">+/-</button>
        <button type="button" className="btn">%</button>
        <button type="button" className="btn">÷</button>
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="btn">X</button>
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="btn">+</button>
        <button type="button" className="btn">1</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="btn">-</button>
        <button type="button" className="btn">0</button>
        <button type="button" className="btn">.</button>
        <button type="button" className="btn">=</button>
      </div>
    );
  }
}

export default Calculator;
