import React, { Component } from "react";
import { useState, useEffect } from "react";

export default function Calculator() {
  // Declare state variables
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");
  const [expression, setExpression] = useState(value);
  const [currentEval, setCurrentEval] = useState(0);

  const handleOperator = (e) => {
    if (operator === "" && value === "") {
      setOperator(e);
    } else if (value !== "") {
      setOperator(e);
      setExpression(expression + e);
    } else if (
      expression[-1] === "/" ||
      expression[-1] === "+" ||
      expression[-1] === "-" ||
      expression[-1] === "x"
    ) {
      setOperator(operator);
    }
    // } else if (value !== "") {
    //   switch (expr) {
    //     case "+":
    //   }
  };
  // useEffect({setExpression(expression)}, [value, operator]);
  const handleValue = (e) => {
    if (operator.indexOf(expression[-1]) !== Number)
      setValue(parseInt(value.toString() + e.toString()));
    setExpression(expression + e);
  };

  const handleEquals = (e) => {
    setValue(value);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">{expression}</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top">AC</button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
          <button
            className="calc-button calc-button-op"
            onClick={() => handleOperator("/")}
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleValue(7)}>
            7
          </button>
          <button className="calc-button" onClick={() => handleValue(8)}>
            8
          </button>
          <button className="calc-button" onClick={() => handleValue(9)}>
            9
          </button>
          <button
            className="calc-button calc-button-op"
            onClick={() => handleOperator("x")}
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleValue(4)}>
            4
          </button>
          <button className="calc-button" onClick={() => handleValue(5)}>
            5
          </button>
          <button className="calc-button" onClick={() => handleValue(6)}>
            6
          </button>
          <button
            className="calc-button calc-button-op"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleValue(1)}>
            1
          </button>
          <button className="calc-button" onClick={() => handleValue(2)}>
            2
          </button>
          <button className="calc-button" onClick={() => handleValue(3)}>
            3
          </button>
          <button
            className="calc-button calc-button-op"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2">0</button>
          <button className="calc-button">.</button>
          <button
            className="calc-button calc-button-op"
            onClick={handleOperator}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
