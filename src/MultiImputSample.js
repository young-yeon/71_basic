import { useState, useRef } from "react";
import React from "react";

function MultiInputSample() {
  const [student, setStudent] = useState({ id: "", name: "" });
  const { id, name } = student;

  // inputId = {current: xxx}
  const inputId = useRef();
  const inputName = useRef();

  /*
  const onChange = (event) => {
    if (event.target.name === "id")
      setStudent({ ...student, id: event.target.value });
    if (event.target.name === "name")
      setStudent({ ...student, name: event.target.value });
  };
  */
  const onChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const onReset = () => {
    setStudent({ id: "", name: "" });
    inputId.current.focus(); // current -> DOM 객체
    // inputName.current.focus();
  };

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={onChange}
        value={id}
        ref={inputId}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={inputName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        학번 : {id}, 이름 : {name}
      </div>
    </>
  );
}

export default MultiInputSample;
