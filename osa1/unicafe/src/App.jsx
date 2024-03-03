import { useState } from 'react'


const Statistics = (props) => {
 
  return (
    <div>
      <h1>Statistics</h1>

      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    
      <p>Total: {props.total} </p>
      <p>Average: {(props.good - props.bad) / props.total}</p>
      <p>Positive: {(props.good / props.total) * 100} %</p>
    </div>
  )
}

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
      
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    
    </div>
  )
}

export default App

