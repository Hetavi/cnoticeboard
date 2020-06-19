import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import {  Grid } from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
 function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
console.log(props)
const links = props.auth.uid ? <SignedInLinks profile={props.profile}  /> : <SignedOutLinks />;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{color: 'white'}}
      >
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{color: 'white'}} />
          </IconButton>
          <Typography >
         <Link to='/' style={{color: 'white'}} >મારૂભરૂચ</Link> 
          </Typography>
          <Grid item xs />
           {links } 
           
          
        
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        {['/dash_dr#DOCTORS', '/dash_hosp#Tie Up Hosp.', '/lists#Directory','/create#My Advertise'].map((text, index) => (
          <ListItem button key={text} onClick={handleDrawerClose}>
          
            <Link to={text.split('#')[0]} key={index}><ListItemText primary={text.split('#')[1]} /></Link>
          </ListItem>
        ))}
      </List>
        <Divider />
        <List>
        {['https://toms.gnfc.in#TOMS', 'https://mail.gnfc.in#MAIL BOX.', 'https://samvad.gnfc.in#SAMVAD','https://passbook.epfindia.gov.in/MemberPassBook/Login#PF passbook'].map((text, index) => (
          <ListItem button key={text} onClick={handleDrawerClose}>
           <a href={text.split('#')[0]} key={index}><ListItemText primary={text.split('#')[1]} /></a>
         
            </ListItem>
        ))}
      </List>
      </Drawer>
    <br/>
    <br/>
    <br/><br/>
    </div>
  );
}
const mapStateToProps = (state) => {
  //console.log(state.firebase.profile)
  //console.log('dsfdsfsd')
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)( PersistentDrawerLeft)