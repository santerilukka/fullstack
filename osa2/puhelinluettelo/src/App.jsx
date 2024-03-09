import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    const isDuplicateName = persons.some(person => person.name === newName)
    const isDuplicateNumber = persons.some(person => person.number === newNumber)
    
    if (isDuplicateName || isDuplicateNumber) {
      alert(`${isDuplicateName ? newName : newNumber} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
          onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          person => (<li key={person.name}>{person.name} {person.number}</li>)
        )}
      </ul>
    </div>
  )

}

export default App