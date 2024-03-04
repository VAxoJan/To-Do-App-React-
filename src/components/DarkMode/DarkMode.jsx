import React, { useState } from "react";
import logo1 from "../images/moun.svg";
import logo2 from "../images/moun.svg";

const DarkMode = () => {
  const [image, setImage] = useState(true);
  const toggleDark = () => {
    setImage(!image)
  }
  return (
    <img
      src={image ? "logo1" : "secondImg"}
      onClick={toggleDark}
      className={`${image ? "mountainMob" : "secondImg"}`}
    />
  );
};

export default DarkMode;
