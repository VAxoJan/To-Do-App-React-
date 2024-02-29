import React from 'react'

const MainInput = ({width,height,radius,border,outline,margin,padding}) => {
  return (
    <input style={{width:width, height:height, borderRadius:radius, border:border, outline:outline,marginTop:margin,paddingInline:padding}} type="search" placeholder='Create a new todo...'/>
    )
}

export default MainInput;