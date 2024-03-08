const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <li>{props.part.name} {props.part.exercises}</li>
  )
}

const Content = (props) => {
  return(
    <ul>
      {props.parts.map(part =>
      <Part key={part.id} part={part}/>
      )}
    </ul>
  )
}

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App