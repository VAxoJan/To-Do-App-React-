import React, { useState } from 'react'
import moon from "../images/moon.svg"

const Header = () => {
  const [color,setColor] = useState("red");
  const darkMode = ({color}) => {
    if(color === "red") {
      setColor("blue")
    }
    else alert("Dark Mode is coming soon")
  }
  return (
    <div className='header'>
        <h1>T O D O</h1>
        <img style={{color:{color}}} onClick={darkMode} className='moonSvg' src={moon}/>
    </div>
  )
}

export default Header;