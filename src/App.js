import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';
import { fetch5Day3HoursWeather, format5Day3HoursWeatherData, getNext4DaysData } from './utils/utils';

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
  const [next4DaysWeather, setNext4DaysWeather] = useState([{},{},{},{}])

  return (
    <div className="App">
      <header>Weather Wizard</header>
      <Form 
        location={location} 
        setLocation={setLocation} 
        setCurrentWeather={setCurrentWeather}
        setNext4DaysWeather={setNext4DaysWeather} />
      <Weather currentWeather={currentWeather} next4DaysWeather={next4DaysWeather}/>
    </div>
  );
}

export default App;
