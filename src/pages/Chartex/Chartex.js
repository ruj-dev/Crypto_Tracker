import React from 'react'
import  { useEffect, useState } from "react";
import LineChart from '../../components/Chart'

function Chartex() {
  const labels = ["s", "d", "w"];
    const chartData = {
      labels: ["s", "d", "w"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        }
      ],
    };
    


   
  return (
    <div className='grey-wrapper'> dd
       <LineChart chartdata={chartData} /> 
    </div>
  )
}

export default Chartex