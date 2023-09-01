import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { iconDescriptionMap } from '../utils/constants'
import Day from './Day'

export default function Weather(props) {

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
        <div className='four-day-container'> 
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
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
