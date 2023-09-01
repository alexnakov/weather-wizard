import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { iconDescriptionMap } from '../utils/constants'
import Day from './Day'
import Today from './Today'

export default function Weather(props) {

  const viewTemplate = (
    <>
      <h2 style={{textAlign: 'center'}}>
        {props.weather.city}, {props.weather.country}
      </h2>
      <div className='weather-container-grid'>
        <div className='today-container'> {/* Must be parent for Today/ to render properly */}
          <Today weather={props.weather} />
        </div>
        <div className='graph-container'></div>
        <div className='four-day-container'> 
          <Day weather={props.weather} />
          <Day weather={props.weather} />
          <Day weather={props.weather} />
          <Day weather={props.weather} />  
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
