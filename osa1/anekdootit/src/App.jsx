import { useState } from 'react'

const getRandomInt = (max) => {
  return (Math.floor(Math.random() * (max)))
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}> { props.label } </button>
    </>
  )
}

const Vote = (props) => {
  //console.log(props.votes, '!!!')
  return (
    <>
      <button onClick={props.voting}>Vote!</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const voting = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(copy)
  }

  const handleClick = () => {
    const x = getRandomInt(8)
    setSelected(x)
    console.log('indeksi on nyt', x)
  }

  return (
    <>
      {anecdotes[selected]}
      <p>has {votes[selected]}  votes.</p>
      <Button handleClick={handleClick} label={'Next anecdote'}/>
      <Vote voting={voting} votes={votes}/>
    </>
  )
}

export default App