
import { Button, Grid } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import Linechart1 from '../linechart/Linechart1'
import Piechart1 from '../piechart/Piechart'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table1 from '../table/Table1'
import { Profile1 } from '../profile/Profile1'
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Dashboard = () => {
  document.body.style.background = "#F5F7FB"
  return (
    <div style={{background: "#F5F7FB"}}>
      <div style={{justifyContent: "space-between", display: "flex"}}>
      <div style={{color:"#43425D", fontSize:"24px", fontWeight:600}}>Overview</div>
      <Button style={{background: "#6763E3", color:"white", width: "160px", height: "40px", display:"flex", justifyContent:"space-around" }}>Add Funds<AddCircleIcon /></Button>
      </div>
      {/* <Grid container style={{gap: "40px"}}>
        <Grid item lg={3} style={{background: "#ffffff", width:"420px"}}><Linechart1 /></Grid>
        <Grid item lg={3} style={{background: "#ffffff", width:"420px"}}><Piechart1 /></Grid>
        </Grid> */}
        <div style={{display:"flex", justifyContent:"space-between", gap:"40px", marginTop:"25px"}}>
          <div style={{width:"65%"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", width:"48%"}}><Linechart1 /></div>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", width:"48%"}}><Piechart1 /></div>
            </div>
            <div style={{marginTop:"30px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}><Table1 /></div>
          </div>
          
          <div style={{width:"35%"}}>
          <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"5px", padding:"15px", height:"400px"}}>
          <Profile1 />  
          </div>


          <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"30px", padding:"15px", height:"353px"}}>
          <div style={{display: "flex", justifyContent:"space-between"}}>
            <div>Product Video</div>
            <div style={{color:"#556575"}}><MoreVertIcon /></div>
          </div>
       <iframe style={{height: "300px", width:"100%", marginTop:"5px"}} src="https://www.youtube.com/embed/Oy6hk6Y7VHQ?rel=0&amp;autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
       </div>
          </div>

        </div>
         
       {/* <Table1 /> */}
       
    </div> 
  )
}

export default Dashboard
