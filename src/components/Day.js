import React from 'react'
import { iconDescriptionMap } from '../utils/constants'

export default function Day(props) {
    return (
      <div>
        <div className="day-of-week">{props.next4DaysWeather.dayName}</div>
        <div className='icon-container'>
          {iconDescriptionMap[props.next4DaysWeather.mainDescription]}
        </div>
        <div className='min-max-flex-container'>
          <div className='max-temp'>
            {props.next4DaysWeather.minTemp}°
          </div>
          <div className='min-temp'>
            {props.next4DaysWeather.maxTemp}°
          </div>
        </div>
      </div>
    )
  }
  