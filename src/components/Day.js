import React, {useState} from 'react'
import { iconDescriptionMap } from '../utils/constants'

export default function Day(props) {
  const unclickedStyle = { border: '1px solid black' }
  const clickedStyle = { border: '1px solid yellow' }

  function handleSelfClick() {
    props.clickDay(props.dayIndex)
  }

  function checkIfClicked() {
    if (props.clickedArr[props.dayIndex] === 1) {
      return true 
    } else { return false }
  }

  return (
    <div onClick={handleSelfClick} style={checkIfClicked() ? clickedStyle : unclickedStyle}>
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
  