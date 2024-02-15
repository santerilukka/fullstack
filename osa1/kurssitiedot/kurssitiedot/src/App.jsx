const Header = ({course}) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
      
    </div>
  )
}


export default App