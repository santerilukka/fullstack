import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter names shown  with: <input value={filter}
        onChange={handleFilterChange} />
      </div>
      <h2>add a new contact</h2>
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
        {filteredPersons.map(person => 
        (<li key={person.name}>{person.name} {person.number}</li>)
        )}
      </ul>
    </div>
  )

}

export default App