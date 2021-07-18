import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Option from './Option'
import '../components/Question.css'

const Question = ({
  handleAnswer,
  showAnswer,
  nextQuestion,
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
    <div>
      <div
        className='qst centered text-black'
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
      {showAnswer && (
        <div className='d-flex justify-content-end'>
          <button onClick={nextQuestion} className='btn--next '>
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Question
