import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';
import { fetch5Day3HoursWeather, format5Day3HoursWeatherData, getNext4DaysData, formatForNext4DataForChart } from './utils/utils';

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

  async function one1(e) {
    e.preventDefault()
    const data = await fetch5Day3HoursWeather('london')
    formatForNext4DataForChart(data)
  }

  return (
    <div className="App">
      <header>Weather Wizard</header>
      <button onClick={e => one1(e)}>Click ME</button>
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
