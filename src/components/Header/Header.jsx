import React, { useState } from 'react'
import moon from "../images/moon.svg"
import sun from "../images/sun.svg"
import DarkMode from '../DarkMode/DarkMode'

const Header = () => {
  const [dark, setDark] = useState(true);
  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className="header">
        <h1>T O D O</h1>
        <img onClick={toggleDarkMode} className={`${dark ? "moonLight" : "moonDark"}`} src={dark ? {moon} : {sun}}/>
    </div>
  )
}

export default Header;