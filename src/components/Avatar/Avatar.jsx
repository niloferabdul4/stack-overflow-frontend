import React from 'react'

const Avatar = ({children,backgroundColor,color,borderRadius,px,py,fontSize,cursor}) => {
    const style={
        backgroundColor,
        color:color || 'black',
        borderRadius,
        padding:`${px} ${py}`,
        fontSize,
        textAlign:'center',
        cursor:cursor || 'pointer',
        textDecoration: "none",
    }
    
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
