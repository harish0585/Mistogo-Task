import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { localRoute } from '../../routes/localRoutes';
import { styles } from "./DrawerUIStyle";
import Navigation from '../navigation/Navigation';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(styles);

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "#3C3B54",
            borderRadius: '2px',
            borderLeft: '5px solid#A3A0FB',
            color: "#FFFFFF !important",
            "& .MuiListItemIcon-root": {
                color: "#FFFFFF",
            },
            "&& .makeStyles-drawerMenuIten-19 span":
            {
                fontWeight: 700,
                color: "#FFFFFF !important",
            }
        },
    },
    selected: {}
})(MuiListItem);

const DrawerUI = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [pageTitle, setPageTitle] = useState('');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

        if (index === 0) {
            history.push(localRoute.home)
        }

        if (index === 1) {
            history.push(localRoute.dashboard)
        }

        if (index === 2) {
            history.push(localRoute.inbox)
        }

        if (index === 3) {
            history.push(localRoute.products)
        }

        if (index === 4) {
            history.push(localRoute.admin)
        }

    };

    useEffect(() => {
        let total_url = window.location.pathname.split('/')
        let url = total_url[1];
        if (url === "home") {
            setSelectedIndex(0)
        }
        if (url === "dashboard") {
            setSelectedIndex(1)
        }
        if (url === "inbox") {
            setSelectedIndex(2)
        }
        if (url === "products") {
            setSelectedIndex(3)
        }
        if (url === "admin") {
            setSelectedIndex(4)
        }
    }, []);

    let pageTitlePath = history.location && history.location.pathname.split('/')

    useEffect(() => {
        let str = pageTitlePath && pageTitlePath[1].replace("-", " ")
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        setPageTitle(splitStr.join(' '))
    }, [pageTitlePath])

    const handleDrawerOpen = () => {
        setOpen(!open);
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
                <Toolbar style={{ background: "#FFFFFF" }} >
                    {/* <div className={classes.toolBar} >
                        
                    </div> */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        style={{border:"none"}}
                        // edge="start"
                        // className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon style={{ color: "black" }}/>
                    </IconButton>

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
                   <div style={{color: "white", fontWeight: 800, fontSize: "20px" }}>A C M E</div>
                </div>
                <List>
                    <ListItem button onClick={(event) => handleListItemClick(event, 0)} selected={selectedIndex === 0}>
                        <ListItemIcon> <HomeIcon /> </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={(event) => handleListItemClick(event, 1)} selected={selectedIndex === 1}>
                    <ListItemIcon> <AssessmentOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={(event) => handleListItemClick(event, 2)} selected={selectedIndex === 2}>
                        <ListItemIcon> <InboxOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button onClick={(event) => handleListItemClick(event, 3)} selected={selectedIndex === 3}>
                        <ListItemIcon> <EventNoteOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItem>
                    <ListItem button onClick={(event) => handleListItemClick(event, 4)} selected={selectedIndex === 4}>
                        <ListItemIcon> <SettingsOutlinedIcon /> </ListItemIcon>
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
  )
}

export default DrawerUI
