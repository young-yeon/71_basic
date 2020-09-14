import { useState } from "react";
import React from "react";

function StateSample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };
  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  const onDecrease = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <>
      <p>You Clicked {count} times</p>
      <button onClick={counter}>Click me</button>
      <h1>{number}</h1>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </>
  );
}

export default StateSample;
