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