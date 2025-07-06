import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {
  const [data, setData] = useState([["Date", "Prices"]]);
  useEffect(()=>{
    let dataCopy = [["Date", "Prices"]];
    if(historicalData.prices){
        historicalData.prices.map((item) => {
  dataCopy.push([new Date(item[0]), item[1]]);
});

        setData(dataCopy);
    }
  }, [historicalData]
)

return (
  <Chart
    chartType="LineChart"
    data={data}
    width="100%"
    height="100%"
    legendToggle
    options={{
  legend: {
    position: 'top',
    alignment: 'center',
    textStyle: {
      fontSize: 12,
    },
  },
  chartArea: {
    top: 60,
    bottom: 50,
    left: 80,
    right: 20,
    width: '80%',
    height: '70%',
  },
  vAxis: {
    gridlines: {
      count: 3,  // Automatically adds 3 ticks
    },
    textStyle: {
      fontSize: 12,
    },
  },
}}

  />
);

}

export default LineChart;
