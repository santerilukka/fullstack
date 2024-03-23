import { useState, useEffect } from "react"
import axios from "axios"

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const apiKey = import.meta.env.VITE_SOME_KEY
    
    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}&units=metric`
            )
            setWeather(response.data);
          } catch (error) {
            console.error('Error fetching weather data:', error)
          }
        }
        if (country.capital) {
          fetchWeather()
        }
      }, [country.capital, apiKey])

    return(
    <div>
      <div>
        <h2>{country.name.common}</h2>
        
        <img src={country.flags.png} alt={country.flags.alt} />
        
        <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
        <p><strong>Capital:</strong> {country.capital || "Not provided"}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Area:</strong> {country.area}</p>
      </div>
      <br />
      <div>
      {weather && (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          {weather.weather[0].icon && (
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />)}
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
      </div>
    </div>
    )
}

export default CountryDetails