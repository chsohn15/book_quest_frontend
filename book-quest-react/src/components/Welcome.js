import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SignUp from './SignUp2'
import LogIn from './LogIn'

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

function Welcome(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    signup: false,
    login: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const signUpDrawer = (anchor) => (

    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <SignUp history={props.history}/>
      
    </div>

  );

  const loginDrawer = (anchor) => (
    <div 
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      role="presentation"
    >
      <LogIn history={props.history}/>
      
    </div>
  );

  return (
    <div id="welcome-container">

      <React.Fragment key={"signup"}>
          <Button onClick={toggleDrawer("signup", true)}>Sign Up</Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["signup"]}
            onClose={toggleDrawer("signup", false)}
            onOpen={toggleDrawer("signup", true)}
          >
            {signUpDrawer("right")}
          </SwipeableDrawer>
        </React.Fragment>

        <React.Fragment key={"login"}>
          <Button onClick={toggleDrawer("login", true)}>Log In</Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["login"]}
            onClose={toggleDrawer("login", false)}
            onOpen={toggleDrawer("login", true)}
          >
            {loginDrawer("right")}
          </SwipeableDrawer>
        </React.Fragment>

      {/* {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Sign Up</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {signUpDrawer(anchor)}
          </SwipeableDrawer>
        </React.Fragment>))}

         {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>Login</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {loginDrawer(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
      ))} */}
    </div>
  );
}

    // const goToSignUpPage = () => {
    //     props.history.push("/signup");
    //   };

    //   const goToLoginPage = () => {
    //     props.history.push("/login");
    //   };

    // return(
    //     <div id="welcome-container">
    //         <button onClick={() => goToSignUpPage()}>Sign Up Today!</button>
    //         <button onClick={() => goToLoginPage()}>Login</button>
    //     </div>
    // )


export default Welcome