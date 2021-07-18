import React from 'react'

const Counter = ({ qIndex, numberOfQ }) => {
  return (
    <h1 className='text-align-center text-white'>
      {qIndex + 1} / {numberOfQ}
    </h1>
  )
}

export default Counter
