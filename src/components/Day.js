import React, {useContext, useState} from 'react'
import { iconDescriptionMap } from '../utils/constants'
import { Context } from './Weather'

export default function Day(props) {
  const [celciusOrFahrenheit] = useContext(Context)

  const unclickedStyle = { backgroundColor: 'white' }
  const clickedStyle = { backgroundColor: 'lightgrey' }

  function handleSelfClick() {
    props.clickDay(props.dayIndex)
  }

  function checkIfClicked() {
    if (props.clickedArr[props.dayIndex] === 1) {
      return true 
    } else { return false }
  }

  function temperature(data) {
    if (celciusOrFahrenheit === true) {
      return <p>{data}°</p>
    } else {
      return <p>{Math.round(data * 9/5 + 32)}<sup>F</sup></p>
    }
  }

  return (
    <div onClick={handleSelfClick} style={checkIfClicked() ? clickedStyle : unclickedStyle}>
      <div className="day-of-week">{props.next4DaysWeather.dayName}</div>
      <div className='icon-container'>
        {iconDescriptionMap[props.next4DaysWeather.mainDescription]}
      </div>
      <div className='min-max-flex-container'>
        <div className='max-temp' style={{color: 'grey'}}>
          {temperature(props.next4DaysWeather.minTemp)}
        </div>
        <div className='min-temp'>
          {temperature(props.next4DaysWeather.maxTemp)}
        </div>
      </div>
    </div>
  )
}
  