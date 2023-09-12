import React, { useContext } from 'react'
import { iconDescriptionMap } from '../utils/constants'
import { Context } from './Weather'

export default function Today(props) {
  const [celciusOrFahrenheit, setCelciusOrFahrenheit] = useContext(Context)

  const celciusStyle = celciusOrFahrenheit ? {color: 'black'} : {color: 'grey'}
  const fahrenheitStyle = celciusOrFahrenheit ? {color: 'grey'} : {color: 'black'}

  function temperature() {
    if (celciusOrFahrenheit === true) {
      return props.currentWeather.temperature
    } else {
      return Math.round(props.currentWeather.temperature * 9/5 + 32)
    }
  }

  function onClickUnit() {
    setCelciusOrFahrenheit(!celciusOrFahrenheit)
  }

  return (
    <div>
      <div className='top'>
        {iconDescriptionMap[props.currentWeather.mainDescription]}
        <div className="temp-unit-static-container">
          <div className='rel-container'>
            <div className='temp'>{temperature()}</div>
            <div className='unit-container'>
              <span onClick={onClickUnit} style={celciusStyle}>C</span>
              <span>|</span>
              <span onClick={onClickUnit} style={fahrenheitStyle}>F</span>
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
