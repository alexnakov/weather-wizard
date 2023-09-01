import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { iconDescriptionMap } from '../utils/constants'
import Day from './Day'
import Today from './Today'

export default function Weather(props) {

  const viewTemplate = (
    <>
      <h2 style={{textAlign: 'center'}}>
        {props.currentWeather.city}, {props.currentWeather.country}
      </h2>
      <div className='weather-container-grid'>
        <div className='today-container'> {/* Must be parent for Today/ to render properly */}
          <Today currentWeather={props.currentWeather} />
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
      {allKeysAreNull(props.currentWeather) ? 
      <h2 style={{textAlign: 'center'}}>Enter a city</h2> : viewTemplate}
    </div>
  )
}
