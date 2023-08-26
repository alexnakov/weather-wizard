import React from 'react'
import { allKeysAreNull } from '../utils/utils'
import { WiDaySunny } from 'weather-icons-react'

export default function Weather(props) {

  const viewTemplate = (
    <div className='weather-container-grid'>
      <div className='today-container'>
        <div className='top'>
          <WiDaySunny size='90px'/>
          <span className='temp'>15</span>
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
