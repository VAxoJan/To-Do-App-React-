import React from 'react'
import moon from "../images/moon.svg"

const Header = () => {
  return (
    <div className='header'>
        <h1>T O D O</h1>
        <img className='moonSvg' src={moon}/>
    </div>
  )
}

export default Header;