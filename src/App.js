import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({
    mainDescription: null, 
    temperature: null,
    cloudiness: null,
    humidity: null,
    wind: null,
  })

  return (
    <div className="App">
      <header>Weather Wizard</header>
      <Form location={location} setLocation={setLocation} setWeather={setWeather}/>
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
