import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes";
import { styles } from "./DrawerUIStyle";
import Navigation from "../navigation/Navigation";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ReactSearchBox from "react-search-box";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { fontSize } from "@mui/system";

const useStyles = makeStyles(styles);

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#3C3B54",
      borderRadius: "2px",
      borderLeft: "3px solid#A3A0FB",
      color: "#FFFFFF !important",
      "& .MuiListItemIcon-root": {
        color: "#FFFFFF",
      },
      "&& .makeStyles-drawerMenuIten-19 span": {
        fontWeight: 700,
        color: "#FFFFFF !important",
      },
    },
  },
  selected: {},
})(MuiListItem);

const DrawerUI = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [pageTitle, setPageTitle] = useState("");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 0) {
      history.push(localRoute.home);
    }

    if (index === 1) {
      history.push(localRoute.dashboard);
    }

    if (index === 2) {
      history.push(localRoute.inbox);
    }

    if (index === 3) {
      history.push(localRoute.products);
    }

    if (index === 4) {
      history.push(localRoute.admin);
    }
  };

  useEffect(() => {
    let total_url = window.location.pathname.split("/");
    let url = total_url[1];
    if (url === "home") {
      setSelectedIndex(0);
    }
    if (url === "dashboard") {
      setSelectedIndex(1);
    }
    if (url === "inbox") {
      setSelectedIndex(2);
    }
    if (url === "products") {
      setSelectedIndex(3);
    }
    if (url === "admin") {
      setSelectedIndex(4);
    }
  }, []);

  let pageTitlePath = history.location && history.location.pathname.split("/");

  useEffect(() => {
    let str = pageTitlePath && pageTitlePath[1].replace("-", " ");
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    setPageTitle(splitStr.join(" "));
  }, [pageTitlePath]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ background: "#FFFFFF" }}>
          {/* <div className={classes.toolBar} >
                        
                    </div> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            style={{ border: "none" }}
            // edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <div style={{ color: "black", border: "none" }}>
            <ReactSearchBox
              style={{display: "flex", justifyContent:"flex-end" }}
              placeholder="Search transactions, invoices or help"
              autoFocus
              leftIcon={<SearchIcon style={{ color: "#C8CFD4" }}/>}
              iconBoxSize="80px"
            />
          </div>

          <div style={{marginLeft: "auto"}}>
          <NotificationsNoneIcon onClick={handleClick2} style={{color: "#C8CFD4"}}/> &nbsp; &nbsp;
          <Menu
        id="simple-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        style={{marginTop: "50px"}}
      >
        <MenuItem onClick={handleClose2} style={{width: "370px", justifyContent: "space-between"}}>
            <div style={{display: "flex", justifyContent: "space-between", width: "350px"}}>
                <div><Avatar alt="Remy Sharp" src="https://www.filmibeat.com/img/popcorn/profile_photos/chiranjeevi-20190801110016-8359.jpg" /></div>
                <div>
                    <div style={{fontWeight: 600, fontSize:"16px"}}>Bavid Kames</div>
                    <div style={{color:"#43425D", fontSize:"12px"}}>Assigned you on the call with Sara</div>
                </div>
                <div style={{color:"#43425D", fontSize:"12px"}}>2 min ago</div>
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose2} style={{width: "370px", justifyContent: "space-between"}}>
        <div style={{display: "flex", justifyContent: "space-between", width: "350px"}}>
                <div><Avatar alt="Remy Sharp" src="https://www.firstpost.com/wp-content/uploads/2022/07/Collage-Maker-13-Jul-2022-07.33-PM-min.jpg?impolicy=website&width=320&height=180" /></div>
                <div>
                    <div style={{fontWeight: 600, fontSize:"16px"}}>Alexa Mary</div>
                    <div style={{color:"#43425D", fontSize:"12px"}}>Marked the task <span style={{color:"#3B86FF"}}>New UI</span> as done</div>
                </div>
                <div style={{color:"#43425D", fontSize:"12px"}}>5 min ago</div>
            </div>
        </MenuItem>
        <MenuItem onClick={handleClose2} style={{width: "370px", justifyContent: "space-between"}}>
        <div style={{display: "flex", justifyContent: "space-between", width: "350px"}}>
                <div><Avatar alt="Remy Sharp" src="https://static.toiimg.com/photo/msid-82275756/82275756.jpg" /></div>
                <div>
                    <div style={{fontWeight: 600, fontSize:"16px"}}>Eva Maria</div>
                    <div style={{color:"#43425D", fontSize:"12px"}}>Added a new comment on Sales</div>
                </div>
                <div style={{color:"#43425D", fontSize:"12px"}}>10 min ago</div>
            </div>
        </MenuItem>

        <div style={{color: "#3B86FF", fontSize: "12px", marginLeft:"150px", marginTop: "20px"}}>Show more</div>
      </Menu>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div style={{color: "#4D4F5C", fontSize: "12px"}}>John Doe</div> {anchorEl ? <ExpandMoreIcon style={{color: "#C8CFD4"}} /> : <ExpandLessIcon style={{color: "#C8CFD4"}}/>} <Avatar alt="Remy Sharp" src="https://newsresolution.com/wp-content/uploads/2020/04/Ajith-Kumar-actor-Movie-Age-height-Weight-Size-Wife-Family-Biography.jpg" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop: "50px"}}
      >
        <MenuItem onClick={handleClose} style={{color: "#43425D", fontSize: "12px"}}><PermIdentityIcon /> &nbsp; &nbsp; My Profile</MenuItem>
        <MenuItem onClick={handleClose} style={{color: "#43425D", fontSize: "12px"}}><AssignmentIcon /> &nbsp; &nbsp; Billing</MenuItem>
        <MenuItem onClick={handleClose} style={{color: "#43425D", fontSize: "12px"}}><ExitToAppIcon /> &nbsp; &nbsp; Logout</MenuItem>
      </Menu>
    </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div style={{ color: "white", fontWeight: 800, fontSize:"20px", marginLeft:"14px" }}>
            ACME
          </div>
        </div>
        <List>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 0)}
            selected={selectedIndex === 0}
          >
            <ListItemIcon>
              {" "}
              <HomeIcon style={{color:"#676681"}}/>{" "}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 1)}
            selected={selectedIndex === 1}
          >
            <ListItemIcon>
              {" "}
              <AssessmentOutlinedIcon style={{color:"#676681"}}/>{" "}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 2)}
            selected={selectedIndex === 2}
          >
            <ListItemIcon>
              {" "}
              <InboxOutlinedIcon style={{color:"#676681"}}/>{" "}
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 3)}
            selected={selectedIndex === 3}
          >
            <ListItemIcon>
              {" "}
              <EventNoteOutlinedIcon style={{color:"#676681"}}/>{" "}
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, 4)}
            selected={selectedIndex === 4}
          >
            <ListItemIcon>
              {" "}
              <SettingsOutlinedIcon style={{color:"#676681"}}/>{" "}
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          <Navigation />
        </Typography>
      </main>
    </div>
  );
};

export default DrawerUI;
