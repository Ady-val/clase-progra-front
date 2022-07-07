import React from 'react'

function PokeSearch() {
  return (
    <div className='poke-search'>
      <div className="list">list</div>
      <div className="search-container">
        <div className="search">
          <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <input type="text" className="search-input" id="search-input" placeholder="name or id" />
        </div>
      </div>
    </div>
  )
}

export default PokeSearch