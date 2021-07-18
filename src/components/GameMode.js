import React from 'react'

import Data from '../gameModeList'

import './GameMode.css'

const Mode = ({ handleGameMode, data: { category, image, apiLink } }) => {
  return (
    <div className='col-6 '>
      <img
        onClick={() => {
          handleGameMode(apiLink)
        }}
        className='gMode--img img-thumbnail'
        src={image}
        alt={category}
      />
      <p className='text-center text-white'>{category}</p>
    </div>
  )
}
const GameMode = ({ handleGameMode }) => {
  return (
    <div>
      <h3 className='gMode--Title text-white'> Choose Your Category</h3>
      <div className='row justify-content-md-center text-center'>
        {Data &&
          Data.map((d) => {
            return <Mode data={d} handleGameMode={handleGameMode} />
          })}
      </div>
    </div>
  )
}

export default GameMode
