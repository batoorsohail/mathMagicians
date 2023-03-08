import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.value));
  };
  return (
    <section className="calculator-container">
      <div className="result">
        <p>
          {state.total}
          {state.operation}
          {state.next}
        </p>
      </div>
      <div className="calculator">
        <button type="button" className="button" onClick={clickHandler} value="AC">AC</button>
        <button type="button" className="button" onClick={clickHandler} value="+/-">+/-</button>
        <button type="button" className="button" onClick={clickHandler} value="%">%</button>
        <button type="button" className="operator" onClick={clickHandler} value="÷">÷</button>
        <button type="button" className="button" onClick={clickHandler} value="7">7</button>
        <button type="button" className="button" onClick={clickHandler} value="8">8</button>
        <button type="button" className="button" onClick={clickHandler} value="9">9</button>
        <button type="button" className="operator" onClick={clickHandler} value="x">x</button>
        <button type="button" className="button" onClick={clickHandler} value="4">4</button>
        <button type="button" className="button" onClick={clickHandler} value="5">5</button>
        <button type="button" className="button" onClick={clickHandler} value="6">6</button>
        <button type="button" className="operator" onClick={clickHandler} value="-">-</button>
        <button type="button" className="button" onClick={clickHandler} value="3">1</button>
        <button type="button" className="button" onClick={clickHandler} value="2">2</button>
        <button type="button" className="button" onClick={clickHandler} value="1">3</button>
        <button type="button" className="operator" onClick={clickHandler} value="+">+</button>
        <button type="button" className="button btn-0" onClick={clickHandler} value="0">0</button>
        <button type="button" className="button" onClick={clickHandler} value=".">.</button>
        <button type="button" className="operator" onClick={clickHandler} value="=">=</button>
      </div>
    </section>
  );
}

export default Calculator;
