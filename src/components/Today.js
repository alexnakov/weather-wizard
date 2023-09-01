import React from 'react'
import { iconDescriptionMap } from '../utils/constants'

export default function Today(props) {
  return (
    <div>
      <div className='top'>
        {iconDescriptionMap[props.currentWeather.mainDescription]}
        <div className="temp-unit-static-container">
          <div className='rel-container'>
            <div className='temp'>{props.currentWeather.temperature}</div>
            <div className='unit-container'>
              <span>C</span>
              <span>|</span>
              <span>F</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p className='day-stat'>Cloudiness: {props.currentWeather.cloudiness} %</p>
        <p className='day-stat'>Humidity: {props.currentWeather.humidity} %</p>
        <p className='day-stat'>Wind: {props.currentWeather.windSpeed} m/s</p>
      </div>
    </div>
  )
}
