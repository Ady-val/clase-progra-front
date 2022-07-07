import React from 'react'
import PokeInfo from '../components/PokeInfo';
import PokeSearch from '../components/PokeSearch';

function Main() {
  return (
    <div className='app-main'>
      <PokeInfo />
      <PokeSearch />
    </div>
  )
}

export default Main