const SearchResults = ({ countries, handleCountrySelect }) => (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          {country.name.common}
          <button onClick={() => handleCountrySelect(country)}>Select</button>
        </li>
      ))}
    </ul>
)

export default SearchResults