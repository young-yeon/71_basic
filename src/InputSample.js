import { useState } from "react";
import React from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (event) => {
    console.log(event.target);
    setText(event.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>값 : {text}</div>
    </>
  );
}

export default InputSample;
