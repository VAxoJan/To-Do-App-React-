import React, { useState } from "react";

const MainInput = ({
  width,
  height,
  radius,
  border,
  outline,
  margin,
  padding,
}) => {
  const [input, setInput] = useState("");
  return (
    <>
    <input
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setInput(e.target.value);
        }
      }}
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
    <h1>Value:{input}</h1>
    </>
  );
};

export default MainInput;
