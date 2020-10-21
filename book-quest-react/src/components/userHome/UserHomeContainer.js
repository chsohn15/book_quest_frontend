import React from 'react';
import ProfileCard from './profile/ProfileCard.js'
import CurrentBookCard from './profile/CurrentBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import RewardsBar from '../rewardsPage/RewardsBar.js'
import BookSearchContainer from '../bookSearch/BookSearchContainer.js'
import ReadingTweetsContainer from './readingTweets/ReadingTweetContainer.js'
import AllTweets from './readingTweets/AllTweets.js'
import BasicVocabContainer from './vocab/BasicVocabContainer.js'
import ProfileContainer from './profile/ProfileContainer.js'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { loadingBooks } from '../../redux/actions.js'
import { loadingCurrentBook } from '../../redux/actions.js'
import { loadingUser } from '../../redux/actions.js'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { useState } from 'react'
import ProgressChartsContainer from '../progressCharts/ProgressChartsContainer'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';

import StarIcon from '@material-ui/icons/Star';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const UserHomeContainer = (props) => {


    useEffect(() => {
        props.loadingUser()
        props.loadingBooks()
        props.loadingCurrentBook()
        //props.loadingAllTweets()
    }, [])

    const [page, changePage] = useState("profile")

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [subTwitterOpen, setSubTwitterOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleClick = () => {
      setSubTwitterOpen(!subTwitterOpen);
    };
  
    const logOut = () => {
      props.history.push("/")
      localStorage.clear();
      props.logOutUser()
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{backgroundColor: "#008080"}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap id="navbar-title">
              Book Quest
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button onClick={()=> changePage("profile")}>
                <ListItemIcon><PersonPinIcon/></ListItemIcon>
                <ListItemText primary="Profile" classes={{primary:classes.listItemText}}/>
        </ListItem>
        <ListItem button onClick={()=> changePage("browse")}>
                <ListItemIcon><SearchIcon/></ListItemIcon>
                <ListItemText primary="Browse Library" classes={{primary:classes.listItemText}}/>
        </ListItem>
        <ListItem button onClick={()=> changePage("bookshelf")}>
                <ListItemIcon><LocalLibraryIcon/></ListItemIcon>
                <ListItemText primary="My Shelf" classes={{primary:classes.listItemText}} />
        </ListItem>
        <ListItem button button onClick={handleClick} >
                <ListItemIcon onClick={()=> changePage("twitter")}><TwitterIcon/></ListItemIcon>
                <ListItemText primary="Lit Tweets!" classes={{primary:classes.listItemText}}/>
                {subTwitterOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={subTwitterOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText onClick={()=> changePage("tweet_index")} primary="My Tweet Index" classes={{primary:classes.listItemText}}/>
          </ListItem>
        </List>
      </Collapse>

        <ListItem button onClick={()=> changePage("vocab")}>
                <ListItemIcon><LibraryBooksIcon/></ListItemIcon>
                <ListItemText primary="Vocabulary" classes={{primary:classes.listItemText}}/>
        </ListItem>
        <ListItem button onClick={()=> changePage("rewards")}>
                <ListItemIcon><StarIcon/></ListItemIcon>
                <ListItemText primary="Rewards" classes={{primary:classes.listItemText}}/>
        </ListItem>
        <ListItem button onClick={()=> changePage("progress")}>
                <ListItemIcon><AssessmentIcon/></ListItemIcon>
                <ListItemText primary="Progress" classes={{primary:classes.listItemText}}/>
        </ListItem>
        <ListItem button onClick={logOut}>
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText primary="Log Out" classes={{primary:classes.listItemText}}/>
        </ListItem>


           </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            {page === "profile" ? 
            <div>
                <ProfileContainer />
            </div>
            : null}
            {page === "bookshelf" ? <UserBookShelf /> : null}
            {page === "browse" ?  <BookSearchContainer />: null}
            {page === "twitter" ?  <ReadingTweetsContainer />: null}
            {page === "vocab" ?  <BasicVocabContainer />: null}
            {page === "rewards" ?  <RewardsBar />: null}
            {page === "progress" ?  <ProgressChartsContainer />: null}
            {page === "tweet_index" ?  <AllTweets />: null}
        </main>
      </div>
    );

    
}


const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )},
    loadingCurrentBook: () => { dispatch( loadingCurrentBook() )},
    loadingUser: () => { dispatch( loadingUser() )},
    logOutUser: () => { dispatch( {type: 'USER_LOGOUT'} )}
}) 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItemText:{
    fontFamily:" 'Source Serif Pro', serif;",//Insert your required size
  }
}));

export default connect(null, mapDispatchToProps)(UserHomeContainer)