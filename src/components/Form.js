import React, { useState } from 'react'
import {convertUnixTimestampToTime, 
  getCityLocation, getBrowserLocation, getCityFromLatLong} from '../utils/utils.js'


export default function Form(props) {
  const apiKey = `a81cb000c18ce6de18bd0da1c54a94a4`

  function handleInputChange(e) {
    props.setLocation(e.target.value)
  }
  
  function handleSubmitCity(e) {
    e.preventDefault()
    if (props.location === "") {
      return;
    }

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.location}&appid=${apiKey}`)
      .then(res => res.json()) // wait to get the data
      .then(data => {
        console.log(data)
        const latitude = data[0].lat
        const longitude = data[0].lon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)

            const city = data.name
            const country = data.sys.country
            const mainDescription = data.weather[0].main // weather description str
            const temperature = Math.round(data.main.temp - 273) // celcius, int
            const cloudiness = data.clouds.all // %
            const humidity = data.main.humidity  // %
            const windSpeed = data.wind.speed // m/s


            // Not in use but may implement in future
            const sunrise = convertUnixTimestampToTime(data.sys.sunrise)
            const sunset = convertUnixTimestampToTime(data.sys.sunset)

            let newWeather = {
              city: city,
              country: country,
              mainDescription: mainDescription, 
              temperature: temperature,
              cloudiness: cloudiness,
              humidity: humidity,
              windSpeed: windSpeed
            }

            props.setWeather(newWeather)
            console.log(newWeather)
          })
          .catch(err => console.log(err))
      }) // do whatever once you have it
      .catch(err => console.log(err)) // if something fails, output error
  }

  // async function handleSubmitMyLocation(e) {
  //   let latitude;
  //   let longitude;
  //   e.preventDefault()
  //   getUserLocation()
  //     .then(data => {
  //       latitude = data.latitude
  //       longitude = data.longitude
  //     })
  //     .catch(err => {console.log(err)})  

  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       const description = data.weather[0].description
  //       const temperature = Math.round(data.main.temp - 273) // celcius, int
  //       const sunrise = convertUnixTimestampToTime(data.sys.sunrise)
  //       const sunset = convertUnixTimestampToTime(data.sys.sunset)

  //       let newWeather = {
  //         description: description, 
  //         temperature: temperature,
  //         sunrise: sunrise,
  //         sunset: sunset,
  //       }

  //       props.setWeather(newWeather)
  //     })
  //     .catch(err => console.log(err))
  // }

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
