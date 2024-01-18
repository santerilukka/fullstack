const Header = ({course}) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.nimi} {props.harkka}</p>
    </div>
  )
}

const Total = (props) => {

  return(
    <div>
      <p>
        Number of exercises {props.e1+props.e2+props.e3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content nimi={part1} harkka={exercises1}/>
      <Content nimi={part2} harkka={exercises2}/>
      <Content nimi={part3} harkka={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}


export default App