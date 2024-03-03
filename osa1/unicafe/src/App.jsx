import { useState } from 'react'


const Statistics = (props) => {
 
  if (props.total === 0) {
    return (
      <div>
        <br />
        No feedback is given!
      </div>
    )
  }

  return (
    <>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticLine text='Good:' value={props.good}/>
          <StatisticLine text='Neutral:' value={props.neutral}/>
          <StatisticLine text='Bad:' value={props.bad}/>

          <StatisticLine text='Total:' value={props.total}/>
          <StatisticLine text='Average:' value={(props.good - props.bad) / props.total}/>
          <StatisticLine text='Positive-%:' value={(props.good / props.total) * 100} />
        </tbody>
      </table>
    </>  
  )
}

const StatisticLine = (props) => {

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props)  => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
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

      <Button handleClick={handleGoodClick} text='Good'/>
      <Button handleClick={handleNeutralClick} text='Neutral'/>
      <Button handleClick={handleBadClick} text='Bad'/>

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    
    </div>
  )
}

export default App

