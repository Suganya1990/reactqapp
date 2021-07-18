import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Option from './Option'
import Counter from './Counter'
import './Question.css'

const Question = ({
  handleAnswer,
  showAnswer,
  nextQuestion,
  qIndex,
  numberOfQ,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const [options, setOption] = useState([])

  useEffect(() => {
    let randomSort = [...incorrect_answers, correct_answer].sort(
      () => 0.5 - Math.random()
    )
    setOption(randomSort)
  }, [question])

  return (
    <div className='vh-100 d-flex align-content-center flex-wrap'>
      <div
        className='qst text-center text-black'
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>
      <div className='container row justify-content-center m-0'>
        {options
          ? options.map((o) => {
              return (
                <Option
                  answer={correct_answer}
                  option={o}
                  handleAnswer={handleAnswer}
                  showAnswer={showAnswer}
                />
              )
            })
          : null}
      </div>
      <div className='q--footer'>
        <Counter qIndex={qIndex} numberOfQ={numberOfQ} />
        {showAnswer && (
          <button onClick={nextQuestion} className='btn--next'>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Question
