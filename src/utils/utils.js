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