import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from './ProfileCard'
import CurrentBookCard from './CurrentBookCard'
import RewardsBar from './rewardsBar/rewardsBar.js'
import BookViewer from './books/BookViewer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

const ProfileContainer = (props) => {

    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)

    const classes = useStyles();

    return(
        <div>
        <Grid container spacing={3}>
        <Grid item xs>
            <ProfileCard /> 
            <CurrentBookCard /><br />
                     { current_book_status !== 500 ?
                     <div>
                         <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
                         <br/>
                     </div>
                     : null}
            </Grid>
        </Grid>
           
           
            <RewardsBar />
            <BookViewer />
        </div>
    )
}

export default ProfileContainer