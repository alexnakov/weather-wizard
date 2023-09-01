import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { WiDaySunny, WiThunderstorm, WiRain, WiSnow, WiCloud, WiDaySprinkle, WiDayFog } from 'weather-icons-react'

export default function Weather(props) {

  const iconDescriptionMap = {
    "Clear": <WiDaySunny className="w-icon"/>,
    "Thunderstorm": <WiThunderstorm  className="w-icon"/>,
    "Drizzle": <WiDaySprinkle  className="w-icon"/>,
    "Rain": <WiRain  className="w-icon"/>,
    "Snow": <WiSnow  className="w-icon"/>,
    "Clouds": <WiCloud  className="w-icon"/>,
    "Mist": <WiDayFog  className="w-icon"/>,
    "Smoke": <WiDayFog  className="w-icon"/>,
    "Haze": <WiDayFog  className="w-icon"/>,
    "Dust": <WiDayFog  className="w-icon"/>,
    "Fog": <WiDayFog  className="w-icon"/>
  }

  const viewTemplate = (
    <>
      <h2 style={{textAlign: 'center'}}>
        {props.weather.city}, {props.weather.country}
      </h2>
      <div className='weather-container-grid'>
        <div className='today-container'>
          <div className='top'>
            {iconDescriptionMap[props.weather.mainDescription]}
            <div className="temp-unit-static-container">
              <div className='rel-container'>
                <div className='temp'>{props.weather.temperature}</div>
                <div className='unit-container'>
                  <span>C</span>
                  <span>|</span>
                  <span>F</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <p className='day-stat'>Cloudiness: {props.weather.cloudiness} %</p>
            <p className='day-stat'>Humidity: {props.weather.humidity} %</p>
            <p className='day-stat'>Wind: {props.weather.windSpeed} m/s</p>
          </div>
        </div>
        <div className='graph-container'></div>
        <div className='five-day-container'></div>
      </div>
    </>
      )

  return (
    <div>
      {allKeysAreNull(props.weather) ? 
      <h2 style={{textAlign: 'center'}}>Enter a city</h2> : viewTemplate}
    </div>
  )
}
