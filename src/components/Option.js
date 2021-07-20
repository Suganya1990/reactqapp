import React from 'react'

import './option.css'
const Option = ({ showAnswer, btnStyle, answer, option, handleAnswer }) => {
  return (
    <button
      className='btn--option col-12 btn-wrap-text'
      onClick={() => {
        handleAnswer(option)
      }}
      dangerouslySetInnerHTML={{ __html: option }}
    ></button>
  )
}

export default Option
