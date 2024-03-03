import React, { useState } from 'react'

const DarkMode = () => {
    const [image,setImage] = useState(true)
  return (
    <>
    <img className={`${image ? "mountainMob" : "secondImg"}`}/>
    </>
    )
}

export default DarkMode;