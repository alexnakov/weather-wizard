import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
        <YAxis type="number" domain={['dataMin - 1', 'dataMax + 1']}/>
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
