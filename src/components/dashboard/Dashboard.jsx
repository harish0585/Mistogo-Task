import { Button, CardContent, Card, Grid, CardMedia, CardHeader, Typography} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { width } from "@mui/system";
import React from "react";
import Linechart1 from "../linechart/Linechart1";
import Piechart1 from "../piechart/Piechart";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Table1 from "../table/Table1";
import { Profile1 } from "../profile/Profile1";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {styles} from './DashboardStyle.jsx'



const useStyles = makeStyles(styles);
const Dashboard = () => {
  document.body.style.background = "#F5F7FB";
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="space-between" spacing={{xs:5}} sx={{marginBottom:'20px'}} alignItems='center'>
        <Grid item>
          <Typography variant="h5">Overview</Typography>
        </Grid>
        <Grid item>
        <Button
          style={{
            background: "#6763E3",
            color: "white",
            width: "160px",
            height: "40px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          Add Funds
          <AddCircleIcon />
        </Button>
        </Grid>
      </Grid>
      
<Grid container rowSpacing={4} >
      <Grid item container spacing={3}>
        <Grid item lg={3.8} xs={12} order={{ xs: 2, sm: 1 }}>
          <Card
            sx={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "325px",
            }}
          >
            <CardContent>
              <Linechart1 />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3.8} xs={12} order={{ xs: 3, sm: 2 }}>
          <Card
            sx={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "325px",
            }}
          >
            <CardContent>
              <Piechart1 />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4.3} xs={12} order={{ xs: 1, sm: 3 }}>
          <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <CardContent>
              <Profile1 />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item container spacing={3} >

        <Grid lg={7.6} xs={12}
        
          item
          
        >
          <div className={classes.testing}>
          <Table1 />
          </div>
        </Grid>
      

        <Grid item lg={4.3} xs={12} >
          <Card>
            <Grid container justifyContent="space-between" sx={{color:"black", padding:"10px"}}>
              <Grid item>Product</Grid>
              <Grid item sx={{color: "#556575"}}><MoreVertIcon /></Grid>
            </Grid>
            <CardContent sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            height: "325px",
          }}>
              <iframe
                style={{ height: "300px", width: "100%", marginTop: "5px" }}
                src="https://www.youtube.com/embed/Oy6hk6Y7VHQ?rel=0&amp;autoplay=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </Grid>

      {/* <Table1 /> */}
    </div>
  );
};

export default Dashboard;