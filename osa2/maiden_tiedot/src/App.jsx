import { useState, useEffect } from 'react'

import CountryDetails from './components/CountryDetails'
import SearchResults from './components/SearchResults'

import countryService from './services/countryService'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const filteredCountries = countries.filter(
    country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    countryService
      .getAll()
      .then(response => setCountries(response.data));
  }, [])


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setSelectedCountry(null)
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <h1>Search Countries</h1>
      
      <form>
        <input
          type="text"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : filteredCountries.length > 10 ? (
        <p>Too many matches, please specify your search.</p>
      ) : filteredCountries.length > 1 ? (
        <SearchResults countries={filteredCountries} handleCountrySelect={handleCountrySelect} />
      ) : filteredCountries.length === 1 ? (
        setSelectedCountry(filteredCountries[0])
      ) : (
        <p>No matches found.</p>
      )}
    
    </div>
  )
}

export default App