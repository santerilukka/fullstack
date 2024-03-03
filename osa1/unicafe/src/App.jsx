import { useState } from 'react'


const App = () => {
  const handleGoodClick = ()  => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralClick = ()  => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = ()  => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      
      <h1>Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>Total: {total} </p>
      <p>Average: {(good - bad) / total}</p>
      <p>Positive: {(good / total) * 100} %</p>
      <p></p>
    </div>
  )
}

export default App

