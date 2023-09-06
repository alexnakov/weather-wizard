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
  const response = await fetch(url)
  const data = await response.json()
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

export async function fetch5Day3HoursWeather(place) {
  /**
   * @returns {Array} - of JSON data
   */

  let returnData = []
  const [latitude, longitude] = await geocodeThePlace(place)
  await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=a81cb000c18ce6de18bd0da1c54a94a4`)
    .then(res => res.json())
    .then(data => {
      data.list.forEach(element => {
        returnData.push({
          dateText: element.dt_txt, // for day display
          temp: element.main.temp, // for min/max temp
          mainDescription: element.weather[0].main // for icon
        })
      })
    }) // 40 timestamps
    .catch(err => new Error(err))
  
  return returnData
}

function mode(array) {
  /**
   * returns the highest occuring element in an array
   */
  if(array.length == 0)
      return null;
  var modeMap = {};
  var maxEl = array[0], maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
      var el = array[i];
      if(modeMap[el] == null)
          modeMap[el] = 1;
      else
          modeMap[el]++;  
      if(modeMap[el] > maxCount)
      {
          maxEl = el;
          maxCount = modeMap[el];
      }
  }
  return maxEl;
}

export function format5Day3HoursWeatherData(data) {
  /**
   * It takes the 5 day 3 hour data from the API and formats it to 4
   * days with a description, day , and a min/max temp for the Day component.
   */
  const todaysDate = data[0].dateText.slice(0, 11)

  let cutData = data.filter(dict => {
    return dict.dateText.slice(0, 11) !== todaysDate
  })

  cutData = cutData.slice(0, 32)

  let day1 = cutData.slice(0, 8)
  let day2 = cutData.slice(8, 16)
  let day3 = cutData.slice(16, 24)
  let day4 = cutData.slice(24, 32)

  let day1Descriptions = []
  let day2Descriptions = []
  let day3Descriptions = []
  let day4Descriptions = []

  day1.forEach(hour => {
    day1Descriptions.push(hour.mainDescription)
  })

  day2.forEach(hour => {
    day2Descriptions.push(hour.mainDescription)
  })

  day3.forEach(hour => {
    day3Descriptions.push(hour.mainDescription)
  })

  day4.forEach(hour => {
    day4Descriptions.push(hour.mainDescription)
  })

  // 1 data point done, 2 to go
  let mostCommonDescriptionDay1 = mode(day1Descriptions)
  let mostCommonDescriptionDay2 = mode(day2Descriptions)
  let mostCommonDescriptionDay3 = mode(day3Descriptions)
  let mostCommonDescriptionDay4 = mode(day4Descriptions)
  
  let day1Temperatures = []
  let day2Temperatures = []
  let day3Temperatures = []
  let day4Temperatures = []

  day1.forEach(hour => {
    day1Temperatures.push(hour.temp)
  })

  day2.forEach(hour => {
    day2Temperatures.push(hour.temp)
  })

  day3.forEach(hour => {
    day3Temperatures.push(hour.temp)
  })

  day4.forEach(hour => {
    day4Temperatures.push(hour.temp)
  })

  // 2 out of 3 done, last one - date to text
  let minTempDay1 = Math.round(Math.min(...day1Temperatures) - 273)
  let minTempDay2 = Math.round(Math.min(...day2Temperatures) - 273)
  let minTempDay3 = Math.round(Math.min(...day3Temperatures) - 273)
  let minTempDay4 = Math.round(Math.min(...day4Temperatures) - 273)

  let maxTempDay1 = Math.round(Math.max(...day1Temperatures) - 273)
  let maxTempDay2 = Math.round(Math.max(...day2Temperatures) - 273)
  let maxTempDay3 = Math.round(Math.max(...day3Temperatures) - 273)
  let maxTempDay4 = Math.round(Math.max(...day4Temperatures) - 273)

  let day1DayName = new Date(day1[0].dateText.slice(0, 11)).toLocaleDateString('en-EN', {weekday: 'short'})
  let day2DayName = new Date(day2[0].dateText.slice(0, 11)).toLocaleDateString('en-EN', {weekday: 'short'})
  let day3DayName = new Date(day3[0].dateText.slice(0, 11)).toLocaleDateString('en-EN', {weekday: 'short'})
  let day4DayName = new Date(day4[0].dateText.slice(0, 11)).toLocaleDateString('en-EN', {weekday: 'short'})

  let returnData = [
    {dayName: day1DayName, mainDescription: mostCommonDescriptionDay1, maxTemp: maxTempDay1, minTemp: minTempDay1},
    {dayName: day2DayName, mainDescription: mostCommonDescriptionDay2, maxTemp: maxTempDay2, minTemp: minTempDay2},
    {dayName: day3DayName, mainDescription: mostCommonDescriptionDay3, maxTemp: maxTempDay3, minTemp: minTempDay3},
    {dayName: day4DayName, mainDescription: mostCommonDescriptionDay4, maxTemp: maxTempDay4, minTemp: minTempDay4},    
  ]

  return returnData
}

export function formatForNext4DataForChart(data) {
  const todaysDate = data[0].dateText.slice(0, 11)

  let cutData = data.filter(dict => {
    return dict.dateText.slice(0, 11) !== todaysDate
  })

  cutData = cutData.slice(0, 32)

  cutData.forEach(obj => {
    delete obj.mainDescription
    obj.dateText = obj.dateText.slice(11)
    obj.dateText = obj.dateText.slice(0, 5)
    obj.temp = Math.round(obj.temp - 273)
  })

  return ( [
    cutData.slice(0, 8),
    cutData.slice(8, 16),
    cutData.slice(16, 24),
    cutData.slice(24, 32)
  ] )
}
