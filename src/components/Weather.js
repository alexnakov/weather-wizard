import React from 'react'
import { allKeysAreNull } from '../utils/utils'

export default function Weather(props) {
  return (
    <div className='weather-container'>
      <p>{props.weather.description}</p>
      <p>{props.weather.temperature}°C</p>
      <div className='sunrise-set-container'>
        <p>Sunrise: {props.weather.sunrise}</p>
        <p>Sunsset: {props.weather.sunset}</p>
      </div>  
    </div>
  )
}
