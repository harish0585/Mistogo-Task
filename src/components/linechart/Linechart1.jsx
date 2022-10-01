import React from 'react'
import Chart from "react-apexcharts";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Linechart1 = () => {

   const series = [{
        name: 'Products sold',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Total views',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]

     const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        }
    }

  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-between", fontSize:"12px", padding:"10px", color:"#4D4F5C"}}>
        <div>Statistics</div>
        <div>Last 6 months <ExpandMoreIcon style={{color: "#C8CFD4"}} /></div>
      </div>
      <Chart type="area" series={series} options={options} />
    </div>
  )
}

export default Linechart1
