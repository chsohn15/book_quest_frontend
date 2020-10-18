import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { NavLink } from "react-router-dom";

const LogIn = (props) => {
    const classes = useStyles();


    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")
    const [errors, addErrors] = useState([])

    const handleLogIn = (e, username, password) => {
        e.preventDefault()
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        }
        fetch("http://localhost:3000/api/v1/login", configObj)
        .then(res => res.json())
        .then(userInfo => {
            if (userInfo.error){
                addErrors([...errors, userInfo.error])
                localStorage.errors = true;
            }
            else {
            //Save information to local storage
            localStorage.token = userInfo.token 
            localStorage.user_id = userInfo.id 
            localStorage.username = userInfo.username 
        
            goToUserPage()
            }
        })}
    
        const goToUserPage = () => {
            props.history.push("/user_home");
          };

    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log into Your Book Quest Account!
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => handleLogIn(e, username, password)}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={(e) => changeUserName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={(e) => changePassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >

            Log In

          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
        {errors.length > 0 ? 
        errors.map(error => <div>{error}</div>) : null}
        </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Grid>
    </Grid>
          );
        }
    // return(
    //     <div id="login-container">
    //         <div>Log in Here</div>
    //             <form onSubmit={(e) => handleLogIn(e, username, password)}>
    //             <label>Username</label>
    //             <input name="username" type="text" onChange={(e)=> changeUserName(e.target.value)}/>
    //             <label>Password</label>
    //             <input name="password" type="password" onChange={(e)=> changePassword(e.target.value)}/>
    //             <input type="submit" value="Log in"/>
    //             </form>
    //             {errors.length > 0 ? 
    //             errors.map(error => <div>{error}</div>) : null}
    //     </div>
    // )



const mapDispatchToProps = dispatch => {
    return {
        addUser: ((id, first_name, last_name, username, is_student, total_points, streak) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student, total_points, streak}}))
    }
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Book Quest
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: '0.8'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      marginBottom: '20px'
    },
    form: {
      paddingTop: '20px',
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default connect(null, mapDispatchToProps)(LogIn)