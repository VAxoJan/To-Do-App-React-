import React, { useState } from 'react'
import moon from "../images/moon.svg"
import sun from "../images/sun.svg"
import logo1 from "../images/moun.svg";
import logo2 from "../images/black.svg";

const Header = ({src, width}) => {
  const [dark, setDark] = useState(true);
  const [image,setImage] = useState(true)
  const toggleDarkMode = () => {
    setDark((prev) => !prev);
    setImage(!image)
  };


  return (
    <div className="header">
        <h1>T O D O</h1>
        {/* <img onClick={toggleDarkMode} className={`${dark ? "moonLight" : "moonDark"}`} src={dark ? moon : sun}/> */}
        <h1 style={{fontFamily:"monospace"}}>Welcome to my ToDo</h1>
    </div>
  )
}

export default Header;