import React, { useState } from "react";
import img from '../images/cmb.svg'

const MainInput = ({ width, height, radius, border, outline, margin, padding }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const deleteDiv = (item) => {
    setOutput(prev => prev.filter(todo => todo !== item));
  }

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
        <div className="mainInputDiv" key={index}>
          <div className="mainInp">
            <div className="leftSide">
              <input type="checkbox" />
              <p>{item}</p>
            </div>
            <img onClick={() => deleteDiv(item)} style={{ width: "18px", height: "18px", background: "none" }} src={img} alt="delete" />
          </div>
        </div>
      ))}
    </>
  );
};

export default MainInput;