import React from 'react';

function Calculator() {
  return (
    <section>
      <div className="result">
        <p>0</p>
      </div>
      <div className="calculator">
        <button type="button" className="button" value="AC">AC</button>
        <button type="button" className="button" value="AC">+/-</button>
        <button type="button" className="button" value="%">%</button>
        <button type="button" className="operator" value="÷">÷</button>
        <button type="button" className="button" value="7">7</button>
        <button type="button" className="button" value="8">8</button>
        <button type="button" className="button" value="9">9</button>
        <button type="button" className="operator" value="*">*</button>
        <button type="button" className="button" value="4">4</button>
        <button type="button" className="button" value="5">5</button>
        <button type="button" className="button" value="6">6</button>
        <button type="button" className="operator" value="-"> -</button>
        <button type="button" className="button" value="3">3</button>
        <button type="button" className="button" value="2">2</button>
        <button type="button" className="button" value="1">1</button>
        <button type="button" className="operator" value="+">+</button>
        <button type="button" className="button btn-0" value="0">0</button>
        <button type="button" className="button" value=".">.</button>
        <button type="button" className="operator" value="="> =</button>
      </div>
    </section>
  );
}

export default Calculator;
