import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { WiDaySunny } from 'weather-icons-react'

export default function Weather(props) {

  const viewTemplate = (
    <div className='weather-container-grid'>
      <div className='today-container'>
        <div className='top'>
          <WiDaySunny size='90px' className="icon"/>
          <div className="temp-unit-static-container">
            <div className='rel-container'>
              <div className='temp'>15</div>
              <div className='unit-container'>
                <span>C</span>
                <span>|</span>
                <span>F</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <p className='day-stat'>Humidity: </p>
          <p className='day-stat'>Humidity: </p>
          <p className='day-stat'>Humidity: </p>
        </div>
      </div>
      <div className='graph-container'></div>
      <div className='five-day-container'></div>
    </div>
  )

  return (
    viewTemplate
  )
}
