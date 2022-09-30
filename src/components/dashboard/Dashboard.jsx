
import { Grid } from '@mui/material'
import React from 'react'
import Linechart1 from '../linechart/Linechart1'
import Piechart1 from '../piechart/Piechart'

const Dashboard = () => {
  document.body.style.background = "#F5F7FB"
  return (
    <div style={{background: "#F5F7FB"}}>
      <Grid container style={{gap: "20px"}}>
        <Grid item lg={3} style={{background: "#ffffff"}}><Linechart1 /></Grid>
        <Grid item lg={3} style={{background: "#ffffff"}}><Piechart1 /></Grid>
        </Grid>
       
    </div>
  )
}

export default Dashboard
