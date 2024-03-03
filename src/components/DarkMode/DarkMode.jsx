import React, { useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <>
      <div className={`${dark ? "dark-mode" : "light-mode"}`}>
        <h1>My Dark Mode App</h1>
        <button onClick={toggleDarkMode}>
          {dark ? <h1>hello dark</h1> : <h1>hello light</h1>}
        </button>
        <p>Toggle the mode to see the change in action!</p>
      </div>
    </>
  );
};

export default DarkMode;
