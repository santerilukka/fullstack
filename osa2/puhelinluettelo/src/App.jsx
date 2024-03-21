import { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import persons from './services/persons'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter names shown  with: <input value={filter}
      onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({ addPerson, newName, newNumber, handlePersonChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handlePersonChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
const Persons = ({ persons, filter, handleDelete }) => {
  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))
  
    return (
    <ul>
      {filteredPersons.map(person => 
        (<li key={person.name}>
          {person.name + ' '}
          {person.number + ' '}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>)
      )}
    </ul>
  )
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState({state: null, color: 'green'})

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => 
      person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ));
            setNewName('')
            setNewNumber('')
            setMessage({state: `${changedPerson.name} number updated to the phonebook!`, color: 'green'})
            setTimeout(() => {
              setMessage({state: null})
            }, 3000)
          })
          .catch(error => {
            setMessage({state: `Error updating contact: ${changedPerson.name}`,color: 'red'})
            setTimeout(() => setMessage({state: null, color: 'green'}),3000)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setMessage({state: `Error adding contact: ${returnedPerson.name}`,color: 'red'})
          setTimeout(() => setMessage({state: null, color: 'green'}),3000)
        })
        setMessage({state: `Added ${personObject.name} to the phonebook!`, color: 'green'})
        setTimeout(() => {
          setMessage({state: null})
        }, 3000)
    }
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${personToDelete.name}?`)
    if (confirmDelete) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setMessage({state: `Removed ${personToDelete.name} from the phonebook`, color: 'green'})
          setTimeout(() => {
            setMessage({state: null})
          }, 3000)
        })
        .catch(() => {
          setPersons(persons.filter(person => person.id !== id))
          setMessage({state: `${personToDelete.name} has already been removed from the server`,color: 'red'})
          setTimeout(() => setMessage({state: null, color: 'green'}),3000)
        })
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
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message}/>

      <Filter filter={filter}  handleFilterChange={handleFilterChange} />
      
      <h2>add a new contact</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>

        <Persons
          persons={persons}
          filter={filter}
          handleDelete={handleDelete}
        />
    </div>
  )

}

export default App