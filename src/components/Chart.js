import React from 'react';
import { Chart, Line } from 'bizcharts';
import { chartData } from '../data/data';


export function Mychart() {
  return (
    <div className="chart">
      <h4>Price history</h4>
        <Chart scale={{value: {min: 0}}} padding={[10,20,50,40]} autoFit height={500} data={chartData} >
          <Line
            shape="smooth"
            position="month*price"
            color="#605DEC"
          />
        </Chart>
    </div>
  )
  
}