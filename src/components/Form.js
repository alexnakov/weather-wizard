import React, { useState } from 'react'
import {convertUnixTimestampToTime, 
  getCityLocation, getBrowserLocation, getCurrentWeatherFromApi, fetch5Day3HoursWeather, format5Day3HoursWeatherData, formatForNext4DataForChart} from '../utils/utils.js'


export default function Form(props) {
  function handleInputChange(e) {
    props.setLocation(e.target.value)
  }
  
  async function handleSubmitCity(e) {
    e.preventDefault()
    if (props.location === "") {
      return;
    }

    const newWeather = await getCurrentWeatherFromApi(props.location) // Today data
    const fiveDay3Hours = await fetch5Day3HoursWeather(props.location) // next 4 days data
    const fourDayWeather = format5Day3HoursWeatherData(fiveDay3Hours)
    props.setCurrentWeather(newWeather)
    props.setNext4DaysWeather(fourDayWeather)
    props.setNext4DayDataForChart(formatForNext4DataForChart(fiveDay3Hours))
  }
  
  return (
    <form className='flex-form'>
      <div className='flex-child'>
        <input 
          type="text" 
          name="location" 
          placeholder='Enter a city:' 
          onChange={handleInputChange} />
        <input type="submit" onClick={handleSubmitCity} />  
      </div>
      <div className='flex-child'>
        <h2>OR</h2>
      </div>
      <div className='flex-child'>
        <input 
          type='submit' 
          value='My Location' 
          onClick={e => e.preventDefault() }/>
      </div>
    </form>
  )
}
