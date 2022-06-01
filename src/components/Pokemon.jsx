import axios from 'axios'
import React, { useState } from 'react'

function Pokemon() {
  const [data, setDate] = useState()
  const [pokemon, setPokemon] = useState()
  const [abilities, setAbilities] = useState()

  const getPokemon = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon).then(res => {
      setAbilities(res.data.abilities);
      setDate(res.data)
    }).catch(err => {
      setDate()
    })
  }

  const DisplayPokemon = () => {
    return (
      <div className='pokemon-container'>
        <img src={data.sprites.front_default} alt={"pokemon"} />
        <img src={data.sprites.front_shiny} alt={"pokemon"} />
        <div className='pokemon-name'>{data.name}</div>
        <div>Altura: {data.height}</div>
        <div>Peso: {data.weight}</div>
      </div>
    )
  }

  return (
    <div>
      {data ? <DisplayPokemon /> : <div>Pokemon</div>}
      <input type="text" onChange={e => setPokemon(e.target.value)} />
      <button onClick={() => getPokemon()}>dale click</button>
    </div>
  )
}

export default Pokemon