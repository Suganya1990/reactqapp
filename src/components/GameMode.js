import React from 'react'

import Data from '../gameModeList'

import './GameMode.css'

const Mode = ({ handleGameMode, data: { category, image, apiLink } }) => {
  return (
    <div className='col-6 text-center m-auto '>
      <img
        onClick={() => {
          handleGameMode(apiLink)
        }}
        className='gMode--img img-thumbnail'
        src={image}
        alt={category}
      />
      <p className='text-center text-white gMode--CTitle'>{category}</p>
    </div>
  )
}
const GameMode = ({ handleGameMode }) => {
  return (
    <div className='gMode--Container d-flex m-auto'>
      <h3 className=' gMode--Title'>Choose Your Category</h3>
      <div className='row justify-content-md-center text-center gMode--Option m-auto'>
        {Data &&
          Data.map((d, i = 0) => {
            return <Mode key={i} data={d} handleGameMode={handleGameMode} />
          })}
      </div>
    </div>
  )
}

export default GameMode
