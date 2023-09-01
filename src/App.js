import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';
import { getNext4DaysData } from './utils/utils';

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
      <button onClick={() => getNext4DaysData('london')}>Click me</button>
      <Weather currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
