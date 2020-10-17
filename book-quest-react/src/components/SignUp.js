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
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { borders } from '@material-ui/system';

const SignUp = (props) => {

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
    
    return(
        <div id="signup-container">
        <Box component="main" maxWidth="xs"  borderRadius={16} style={{display: 'block', marginTop: "50px",
      flexDirection: 'column', backgroundColor: "white", alignItems: "center", width: '550px', height: "560px",padding:"30px", marginLeft:'440px'}} >
        <CssBaseline />
        <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <MenuBookIcon />
        </Avatar>
          <Typography component="h1" variant="h5" style={{paddingTop: "10px"}}>
            Sign up for an account!
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
    </Box>
    </div>
  );
                // <label>First Name</label>
                // <input onChange={(e) => changeFirstName(e.target.value)} name="first_name" type="text" /><br />
                // <label>Last Name</label>
                // <input onChange={(e) => changeLastName(e.target.value)} name="last_name" type="text" /><br />
                // <label>Username</label>
                // <input onChange={(e) => changeUserName(e.target.value)} name="username" type="text" /><br />
                // <label>Password</label>
                // <input onChange={(e) => changePassword(e.target.value)} name="password" type="password" /><br />
                // <input type="submit"/>

}


const mapDispatchToProps = dispatch => {
    return {
        addUser: ((id, first_name, last_name, username, is_student) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student}}))
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
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: "0px"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default connect(null, mapDispatchToProps)(SignUp)