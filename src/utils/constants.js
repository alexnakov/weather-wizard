import React from "react";
import { WiDaySunny, WiThunderstorm, WiRain, WiSnow, WiCloud, WiDaySprinkle, WiDayFog } from 'weather-icons-react'

export const iconDescriptionMap = {
    "Clear": <WiDaySunny className="w-icon"/>,
    "Thunderstorm": <WiThunderstorm  className="w-icon"/>,
    "Drizzle": <WiDaySprinkle  className="w-icon"/>,
    "Rain": <WiRain  className="w-icon"/>,
    "Snow": <WiSnow  className="w-icon"/>,
    "Clouds": <WiCloud  className="w-icon"/>,
    "Mist": <WiDayFog  className="w-icon"/>,
    "Smoke": <WiDayFog  className="w-icon"/>,
    "Haze": <WiDayFog  className="w-icon"/>,
    "Dust": <WiDayFog  className="w-icon"/>,
    "Fog": <WiDayFog  className="w-icon"/>
  }