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

export function allKeysAreNull(obj) {
  return Object.keys(obj).every(key => obj[key] === null);
}

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve({ latitude, longitude })
      },
      (err) => {
        reject(err)
      })
    } else {
      reject("Geo API not supported")
    }
  })
}

export async function getCityInfo(cityName) {
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