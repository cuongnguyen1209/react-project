import React from 'react';
import { Chart, Line } from 'bizcharts';


const data = [
  // { month: "Jan", price: Math.floor(Math.random()*750)+250 },
  { month: "Feb", price: Math.floor(Math.random()*100)+50},
  { month: "Mar", price: Math.floor(Math.random()*100)+50},
  { month: "Apr", price: Math.floor(Math.random()*100)+50},
  { month: "May", price: Math.floor(Math.random()*100)+50},
  { month: "Jun", price: Math.floor(Math.random()*100)+50},
  { month: "Jul", price: Math.floor(Math.random()*100)+50},
  // { month: "Aug", price: Math.floor(Math.random()*750)+250},
  // { month: "Sep", price: Math.floor(Math.random()*750)+250},
  // { month: "Oct", price: Math.floor(Math.random()*750)+250},
  // { month: "Nov", price: Math.floor(Math.random()*750)+250},
  // { month: "Dec", price: Math.floor(Math.random()*750)+250},
];

export function Mychart() {
  return <Chart scale={{value: {min: 0}}} padding={[10,20,50,40]} autoFit height={500} data={data} >
    <Line
      shape="smooth"
      position="month*price"
      color="#605DEC"
    />
  </Chart>
}