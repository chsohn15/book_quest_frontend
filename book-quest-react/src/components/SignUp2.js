import React from 'react';
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



function SignUp2(props) {
  const classes = useStyles();

    const [first_name, changeFirstName] = useState("")
    const [last_name, changeLastName] = useState("")
    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")

    const directToBookSearch = () => {
        props.history.push('/book_search')
    }
    
    const handleSignUp = (e, first_name, last_name, username, password) => {
        e.preventDefault()
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name, last_name, username, password
            })
        }
        fetch("http://localhost:3000/api/v1/users", configObj)
        .then(res => res.json())
        .then(userInfo => {
            //Save information to local storage
            localStorage.token = userInfo.token 
            localStorage.user_id = userInfo.id 
            localStorage.username = userInfo.username 
            
            // Add user information to store
            props.addUser(
            userInfo.id, 
            userInfo.first_name, 
            userInfo.last_name, 
            userInfo.username, 
            userInfo.is_student)

            directToBookSearch()
        })

    }
    
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up for a Book Quest account today!
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => handleSignUp(e, first_name, last_name, username, password)}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField 
                onChange={(e) => changeFirstName(e.target.value)} name="first_name" type="text"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={(e) => changeLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Grid>
    </Grid>
  );
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
  
  const mapDispatchToProps = dispatch => {
      return {
          addUser: ((id, first_name, last_name, username, is_student) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student}}))
      }
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

export default connect(null, mapDispatchToProps)(SignUp2)