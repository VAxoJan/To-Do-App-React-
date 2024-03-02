import React, { useState } from "react";
import img from '../images/cmb.svg'

const MainInput = ({ width, height, radius, border, outline, margin, padding }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const deleteDiv = (item) => {
    setOutput(prev => prev.filter(todo => todo !== item));
  }

  const lineText = (todo_id) => {
    setOutput((prev) => {
      return prev.map((item) => {
        return item.id === todo_id 
        ? {...item, completed: !item.completed}
        : item;
      });
    });
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  }

  const add = () => {
    if (input.trim() !== "") {
      setOutput((prev) => [...prev, { id: Date.now(), text: input, completed: false }]);
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
              <input type="checkbox" checked={item.completed} onChange={() => lineText(item.id)} />
              <p style={{
                overflowX:"scroll",
                listStyle: "none",
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "#D1D2DA" : "black"
              }} >{item.text}</p>
            </div>
            <img onClick={() => deleteDiv(item)} style={{ width: "18px", height: "18px", background: "none" }} src={img} alt="delete" />
          </div>
        </div>
      ))}
    </>
  );
};

export default MainInput;
