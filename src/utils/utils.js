export function convertUnixTimestampToTime(unixTimestamp) {
  /** 
  * @param {number} unixTimestamp - the unix timestamp
  * @returns {string} - time of that day in format HH:MM
  */
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function allKeysAreNull(weatherObj) {
  // Returns true of the object has all null vals, else false
  return Object.keys(weatherObj).every(key => weatherObj[key] === null);
}

export function getBrowserLocation() {
  function success(position) {

  } 

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = await position.coords.latitude
      const longitude = await position.coords.longitude
      return [latitude, longitude]
    })
  } else {
    console.log(`I can't find your browser location`)
  }
}

export async function getCityLocation(cityName) {
  const apiKey = `a81cb000c18ce6de18bd0da1c54a94a4`

  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
  const data = await response.json()
  
  return {
    country: data[0].country,
    name: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon,
  }
}

export async function getCityFromLatLong(lat, lon) {
  const apiKey = `AIzaSyBBTBVgKMGeQRMyzyFT3ay-CvYF2ygTJ0I`
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${lon}&key=${apiKey}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

export async function geocodeThePlace(place) {
  let latitude;
  let longitude;

  await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=a81cb000c18ce6de18bd0da1c54a94a4`)
    .then(res => res.json())
    .then(data => {
      latitude = data[0].lat
      longitude = data[0].lon
    })
    .catch(err => new Error(err))
  return ([latitude, longitude])
}

export async function getCurrentWeatherFromApi(place) {
  const [latitude, longitude] = await geocodeThePlace(place)

  let newWeather = {
    city: null,
    country: null,
    mainDescription: null, 
    temperature: null,
    cloudiness: null,
    humidity: null,
    windSpeed: null,
  }

  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a81cb000c18ce6de18bd0da1c54a94a4`)
    .then(res => res.json())
    .then(data => {
      newWeather.city = data.name
      newWeather.country = data.sys.country
      newWeather.mainDescription = data.weather[0].main
      newWeather.temperature = Math.round(data.main.temp - 273) // celcius, int 
      newWeather.cloudiness = data.clouds.all
      newWeather.humidity = data.main.humidity
      newWeather.windSpeed = data.wind.speed
    })
    .catch(err => new Error(err))

  return newWeather
}