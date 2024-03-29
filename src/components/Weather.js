import React, { createContext, useState } from 'react'
import { allKeysAreNull } from '../utils/utils'
import { iconDescriptionMap } from '../utils/constants'
import Day from './Day'
import Today from './Today'
import TempGraph from './TempGraph'

export const Context = createContext()

export default function Weather(props) {
  const [clickedArr, setClickedArr] = useState([1, 0, 0, 0])
  const [celciusOrFahrenheit, setCelciusOrFahrenheit] = useState(true) // true if celcius, false is fahrenheit

  function clickDay(dayID) {
    let newArr = [0, 0, 0, 0]
    newArr[dayID] = 1
    setClickedArr(newArr)
  }

  const viewTemplate = (
    <Context.Provider value={[celciusOrFahrenheit, setCelciusOrFahrenheit]}>
      <h2 style={{textAlign: 'center'}}>
        {props.currentWeather.city}, {props.currentWeather.country}
      </h2>
      <div className='weather-container-grid'>
        <div className='today-container'>
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
    </Context.Provider>
  )

  return (
    <div>
      {allKeysAreNull(props.currentWeather) ? 
      <h2 style={{textAlign: 'center'}}>Enter a city</h2> : viewTemplate}
    </div>
  )
}
