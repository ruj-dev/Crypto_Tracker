import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, ChartJS } from "chart.js/auto";


function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    Plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
        
  };
  return <Line data={chartData} option={options} />
}
export default LineChart