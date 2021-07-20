import React from 'react'
import { useState, useEffect } from 'react'
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
    console.log('UseEffect is being rendered')
    setOption(randomSort)
  }, [question, incorrect_answers, correct_answer])

  return (
    <div className='q-container d-flex align-content-center flex-wrap m-auto'>
      <div
        className='vw-100 qst text-center text-black'
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>
      <div className='container row justify-content-center m-0 opt--container'>
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
