import React, { useState } from 'react'
import {convertUnixTimestampToTime, 
  getCityLocation, getBrowserLocation, getCityFromLatLong, getCurrentWeatherFromApi} from '../utils/utils.js'


export default function Form(props) {
  const apiKey = `a81cb000c18ce6de18bd0da1c54a94a4`

  function handleInputChange(e) {
    props.setLocation(e.target.value)
  }
  
  async function handleSubmitCity(e) {
    e.preventDefault()
    if (props.location === "") {
      return;
    }

    const newWeather = await getCurrentWeatherFromApi(props.location)
    props.setCurrentWeather(newWeather)
  }

  async function one(e) {
    e.preventDefault()
    getCityFromLatLong(51.5085, -0.1257)
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
          onClick={one}/>
      </div>
    </form>
  )
}
