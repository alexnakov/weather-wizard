import React from 'react'
import { allKeysAreNull } from '../utils/utils'

export default function Weather(props) {
  function one() {
    if (allKeysAreNull(props.weather)) {
      return <h2 style={{textAlign: 'center'}}>Please Enter a City</h2>
    } else {
      return viewTemplate
    }
  }
  
  const viewTemplate = (
    <div className='weather-container'>
      <p>{props.weather.description}</p>
      <p>{props.weather.temperature}°C</p>
      <div className='sunrise-set-container'>
        <p>Sunrise: {props.weather.sunrise}</p>
        <p>Sunsset: {props.weather.sunset}</p>
      </div>  
    </div>
  )
  
  return (
    one()
  )
}
