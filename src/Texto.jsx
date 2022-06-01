import React from 'react'

function Texto({texto, style}) {
  return (
    <div className={`nombre`} style={style}>{texto}</div>
  )
}

export default Texto