import React from 'react'
import Chart from "react-apexcharts"; 

const Piechart1 = () => {
    
    const options= {}
    const series= [44, 55, 41, 17, 15]
    const labels = ['A', 'B', 'C', 'D', 'E']
    
  return (
    <div>
      <div style={{fontSize:"12px", padding:"10px", color:"#4D4F5C", marginRight:"250px"}} >Sales Distribution</div>
      <Chart type="donut" series={series} options={options} labels={labels} />
    </div>
  )
}

export default Piechart1
