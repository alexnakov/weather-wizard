import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState("")
  const [currentWeather, setCurrentWeather] = useState({
    city: null,
    country: null,
    mainDescription: null, 
    temperature: null,
    cloudiness: null,
    humidity: null,
    wind: null,
  })

  return (
    <div className="App">
      <header>Weather Wizard</header>
      <Form location={location} setLocation={setLocation} setCurrentWeather={setCurrentWeather}/>
      <Weather currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
