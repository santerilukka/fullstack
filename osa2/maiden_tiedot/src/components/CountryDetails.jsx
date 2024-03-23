const CountryDetails = ({ country }) => (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Capital:</strong> {country.capital || "Not provided"}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Area:</strong> {country.area}</p>
    </div>
  )

export default CountryDetails