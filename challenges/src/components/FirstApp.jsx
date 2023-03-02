import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const FirstApp = ({ value }) => {

  const [counter, setCounter] = useState(value)
  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleSubsstract = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(counter == 1)
  }
  return (
    <>
    <>
      <h1> Counter </h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()}>+1</button>
      </>
      <>
      <button onClick={() => handleSubsstract()}>-1</button>
      <button onClick={() => handleReset()}>Reset</button>
      </>
    </>
    
  )
}

FirstApp.defaultProps = {
  counter: 0,
  setCounter: 1
}

export default FirstApp