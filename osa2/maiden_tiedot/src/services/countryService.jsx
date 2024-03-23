import axios from 'axios'

const countryService = {
    getAll: () => 
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all'),
    
    getByName: (name) => 
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
}

export default countryService