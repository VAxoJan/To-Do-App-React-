import React, { useState } from 'react'

const DarkMode = () => {
    const [image,setImage] = useState(false)
  return (
    <img className={`${image ? "mountainMob" : "secondImg"}`}/>
    )
}

export default DarkMode;