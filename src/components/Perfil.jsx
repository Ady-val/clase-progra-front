import React from 'react'

function Perfil({ data }) {
  return (
    <div>
      <div className='title'>{data.name}</div>
      <div className='container'>
        <div className='row'>
          <div className='subtitle'>Edad:</div>
          <div className='text'>{data.age}</div>
        </div>
        <div className='row'>
          <div className='subtitle'>Le gusta la música:</div>
          <div className='text'>{data.music}</div>
        </div>
        <div className='row'>
          <div className='subtitle'>Dificultad:&nbsp;&nbsp;</div>
          <div className='text'>{data.course}</div>
        </div>
        <div className='row'>
          <div className='subtitle'>Color favorito:</div>
          <div className='text'>{data.color}</div>
        </div>
      </div>
    </div>
  )
}

export default Perfil