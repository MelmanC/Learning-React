import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const handleWeather = async (event) => {
    event.preventDefault();
    const apiKey = 'YOUR_API_KEY';

    try {
      const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleWeather}>
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        <button type='submit'>Get Weather</button>
      </form>
      <br/>
      <br/>
      <h2>{weather.name} {weather.sys && weather.sys.country}</h2>
      <h3>{weather.weather && weather.weather[0].description}</h3>
      <h3>{weather.main && weather.main.temp} {weather.name ? "°C" : ""}</h3>
    </div>
  );
}

export default App;
