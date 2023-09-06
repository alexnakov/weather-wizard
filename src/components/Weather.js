import React, { useState } from 'react'
import { allKeysAreNull } from '../utils/utils'
import { iconDescriptionMap } from '../utils/constants'
import Day from './Day'
import Today from './Today'
import TempGraph from './TempGraph'

export default function Weather(props) {
  const [clickedArr, setClickedArr] = useState([1, 0, 0, 0])

  function clickDay(dayID) {
    let newArr = [0, 0, 0, 0]
    newArr[dayID] = 1
    console.log(props.next4DayDataForChart[clickedArr.indexOf(1)])
    setClickedArr(newArr)
  }

  const viewTemplate = (
    <>
      <h2 style={{textAlign: 'center'}}>
        {props.currentWeather.city}, {props.currentWeather.country}
      </h2>
      <div className='weather-container-grid'>
        <div className='today-container'> {/* Must be parent for Today/ to render properly */}
          <Today currentWeather={props.currentWeather} />
        </div>
        <div className='graph-container'>
          <TempGraph data={props.next4DayDataForChart[clickedArr.indexOf(1)]}/>
        </div>
        <div className='four-day-container'> 
          <Day 
            clickedArr={clickedArr}
            clickDay={clickDay}
            dayIndex={0} 
            next4DaysWeather={props.next4DaysWeather[0]} />
          <Day 
            clickedArr={clickedArr}
            clickDay={clickDay}
            dayIndex={1} 
            next4DaysWeather={props.next4DaysWeather[1]} />
          <Day 
            clickedArr={clickedArr}
            clickDay={clickDay}
            dayIndex={2} 
            next4DaysWeather={props.next4DaysWeather[2]} />
          <Day 
            clickedArr={clickedArr}
            clickDay={clickDay}
            dayIndex={3} 
            next4DaysWeather={props.next4DaysWeather[3]} />
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
