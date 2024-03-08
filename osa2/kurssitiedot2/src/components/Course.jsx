const Header = ({ name }) => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
const Part = ({ part }) => {
    return(
      <li>{part.name} {part.exercises}</li>
    )
  }
  
const Content = ({ parts }) => {
    return(
      <ul>
        {parts.map(part =>
        <Part key={part.id} part={part}/>
        )}
      </ul>
    )
  }
  
const Total  = ({ parts }) => {
    const total = parts.reduce((total, part) => total + part.exercises, 0)
    
    return (
      <>
        <b>There are total of {total} exercises.</b>
      </>
    )
  
  }
  
const Course = ({ course }) => {
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total  parts={course.parts} />
      </>
    )
}

export default Course