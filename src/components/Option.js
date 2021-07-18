import React from 'react'
import { useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'
import './option.css'
const Option = ({ showAnswer, btnStyle, answer, option, handleAnswer }) => {
  // const bgColor = showAnswer
  //   ? answer === option
  //     ? 'text-green-500'
  //     : 'text-red-500'
  //   : 'text-orange-500'

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
