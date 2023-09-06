import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
      "dateText": "00:00",
      "temp": 23
  },
  {
      "dateText": "03:00",
      "temp": 22
  },
  {
      "dateText": "06:00",
      "temp": 21
  },
  {
      "dateText": "09:00",
      "temp": 25
  },
  {
      "dateText": "12:00",
      "temp": 30
  },
  {
      "dateText": "15:00",
      "temp": 30
  },
  {
      "dateText": "18:00",
      "temp": 26
  },
  {
      "dateText": "21:00",
      "temp": 23
  },
]

export default function TempGraph(props) {
  return (
    <ResponsiveContainer width="100%" height="95%">
      <AreaChart
        width={500}
        height={400}
        data={props.data}
        margin={{
          top: 35,
          right: 20,
          left: -30,
          bottom: -10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateText" tickCount={4} />
        <YAxis type="number" domain={['dataMin - 3', 'dataMax']}/>
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
