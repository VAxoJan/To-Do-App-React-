import React, { useState } from "react";

const MainInput = ({ width, height, radius, border, outline, margin, padding }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      add();
    }
  }

  function add() {
    if (input.trim() !== "") {
      setOutput((prev) => [...prev, input]);
      setInput("");
    }
  }

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          border: border,
          outline: outline,
          marginTop: margin,
          paddingInline: padding,
        }}
        type="search"
        placeholder="Create a new todo..."
      />
      {output.map((item, index) => (
        <div key={index}>
          <input type="checkbox" />
          <p>{item}</p>
          <button>X</button>
        </div>
      ))}
    </>
  );
};

export default MainInput;
