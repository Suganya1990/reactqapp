import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Question from './components/Question'
import GameMode from './components/GameMode'
import './App.css'
import { purple } from '@material-ui/core/colors'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [qIndex, setQIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [Api_Url, setApi_Url] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const handleAnswer = (option) => {
    if (!showAnswer) {
      if (option === questions[qIndex].correct_answer) {
        setScore(score + 1)
      }
    }
    if (qIndex == questions.length - 1) setGameOver(true)

    setShowAnswer(true)
  }

  const nextQuestion = () => {
    setQIndex(qIndex + 1)
    setShowAnswer(false)
  }
  const resetGame = () => {
    setApi_Url('')
    setQuestions([])
    setQIndex(0)
    setShowAnswer(false)
    setGameOver(false)
  }

  const renderContent = () => {
    if (!Api_Url) {
      return <GameMode handleGameMode={handleGameMode} />
    }
    if (questions) {
      if (qIndex < questions.length)
        return (
          <Question
            data={questions[qIndex]}
            handleAnswer={handleAnswer}
            nextQuestion={nextQuestion}
            showAnswer={showAnswer}
            nextQuestion={nextQuestion}
            qIndex={qIndex}
            numberOfQ={questions.length}
          />
        )
    } else
      return (
        <div className='h-auto d-inline-block align-items-center my-auto'>
          <p
            style={{ minHeight: 'none' }}
            className=' ld--text text-center d-inline-block'
          >
            Loading....
          </p>
        </div>
      )

    if (gameOver) {
      return (
        <div className='d-flex flex-column m-auto justify-content-center align-items-center vh-100'>
          <h3 className='score--text text-center '>Your Score is {score}</h3>
          <button
            className='btn--reset'
            onClick={() => {
              resetGame()
            }}
          >
            Play Again
          </button>
        </div>
      )
    }
  }

  const handleGameMode = (api) => {
    setApi_Url(api)
  }
  useEffect(() => {
    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results)
      })
    renderContent()
  }, [Api_Url])

  return <div className='container vh-100 vw-100 d-flex'>{renderContent()}</div>
}

export default App
