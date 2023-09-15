import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';
import { fetch5Day3HoursWeather, format5Day3HoursWeatherData, getNext4DaysData, formatForNext4DataForChart, getBrowserLatLong, one11 } from './utils/utils';

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
  const [next4DayDataForChart, setNext4DayDataForChart] = useState([[],[],[],[]])

  return (
    <div className="App">
      <button onClick={() => one11()}>Click me</button>
      <header>Weather Wizard</header>
      <Form 
        location={location} 
        setLocation={setLocation} 
        setCurrentWeather={setCurrentWeather}
        setNext4DaysWeather={setNext4DaysWeather}
        setNext4DayDataForChart={setNext4DayDataForChart} />
      <Weather 
        currentWeather={currentWeather} 
        next4DaysWeather={next4DaysWeather} 
        next4DayDataForChart={next4DayDataForChart} />
    </div>
  );
}

export default App;
