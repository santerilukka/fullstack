const Hello = (props) => {

  console.log(props)
  return (
    <>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

const App = () => {
  const name = 'Pekka'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <>
      greeting app created by 
      <a href="https://github.com/santerilukka">santerilukka</a>
    </>
  )
}


export default App