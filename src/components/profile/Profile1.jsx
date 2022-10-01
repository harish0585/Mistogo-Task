import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export const Profile1 = () => {
    const classes = useStyles();
  return (
    <div>
        <Avatar style={{margin: "auto"}} lg={8} alt="Remy Sharp" className={classes.large} src="https://newsresolution.com/wp-content/uploads/2020/04/Ajith-Kumar-actor-Movie-Age-height-Weight-Size-Wife-Family-Biography.jpg" />
        {/* <EditIcon /> */}
        <div style={{fontSize:"14px", color:"#4D4F5C", marginTop:"3px"}}>Nick Herasimenka</div>
        <div style={{fontSize:"12px", color:"#556575", marginTop:"3px"}}>United States</div>
        <div style={{display: "flex", color:"#556575", gap:"6px", justifyContent:"center", marginTop:"4px"}}>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
        </div>
        <br/>
        <div style={{display:"flex", justifyContent:"space-between", width: "90%", marginLeft:"20px"}}>
        <div>Our Users</div>
        <div style={{color:"#556575"}}><MoreVertIcon /></div>
        </div>
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"18px"}}>
            <div><Avatar style={{margin: "auto"}} lg={4} alt="Remy Sharp" src="https://imgnew.outlookindia.com/public/uploads/articles/2021/11/25/Rajnikanth.jpg" />
            </div>
            <div>
                <div style={{fontSize:"14px", color:"#4D4F5C", fontWeight:600}}>Drew James</div>
                <div style={{fontSize:"12px", color:"#556575", marginTop:"5px"}}>United States</div>
            </div>
            <div style={{fontSize:"12px", color:"#556575", marginTop:"26px"}}>Mobile: 9876543210</div>
        </div>

        <div style={{display:"flex", justifyContent:"space-around", marginTop:"18px"}}>
            <div><Avatar style={{margin: "auto"}} lg={4} alt="Remy Sharp" src="https://avatars.sched.co/2/3e/5752450/avatar.jpg?a4f" /></div>
            <div>
                <div style={{fontSize:"14px", color:"#4D4F5C", fontWeight:600}}>Bavid Kames</div>
                <div style={{fontSize:"12px", color:"#556575", marginTop:"5px"}}>United States</div>
            </div>
            <div style={{fontSize:"12px", color:"#556575", marginTop:"26px"}}>Mobile: 9876543210</div>
        </div>

        <div style={{display:"flex", justifyContent:"space-around", marginTop:"18px"}}>
            <div><Avatar style={{margin: "auto"}} lg={4} alt="Remy Sharp" src="https://filmfare.wwmindia.com/content/2021/jun/vijay41624255649.jpg" /></div>
            <div>
                <div style={{fontSize:"14px", color:"#4D4F5C", fontWeight:600}}>Lavid Emes</div>
                <div style={{fontSize:"12px", color:"#556575", marginTop:"5px"}}>United States</div>
            </div>
            <div style={{fontSize:"12px", color:"#556575", marginTop:"26px"}}>Mobile: 9876543210</div>
        </div>
    </div>
  )
}
