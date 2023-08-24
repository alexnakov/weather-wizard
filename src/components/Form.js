import React, { useState } from 'react'
import {convertUnixTimestampToTime} from '../utils/utils.js'


export default function Form(props) {
  const apiKey = `a81cb000c18ce6de18bd0da1c54a94a4`

  function handleInputChange(e) {
    props.setLocation(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&appid=${apiKey}`)
      .then(res => res.json()) // wait to get the data
      .then(data => {
        const latitude = data[0].lat
        const longitude = data[0].lon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const description = data.weather[0].description
            const temperature = Math.round(data.main.temp - 273) // celcius, int
            const sunrise = convertUnixTimestampToTime(data.sys.sunrise)
            const sunset = convertUnixTimestampToTime(data.sys.sunset)

            let newWeather = {
              description: description, 
              temperature: temperature,
              sunrise: sunrise,
              sunset: sunset,
            }
            props.setWeather(newWeather)
          })
          .catch(err => console.log(err))
      }) // do whatever once you have it
      .catch(err => console.log(err)) // if something fails, output error
  }
  
  return (
    <form>
      <input 
        type="text" 
        name="location" 
        placeholder='Enter a city:' 
        onChange={handleInputChange} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  )
}
