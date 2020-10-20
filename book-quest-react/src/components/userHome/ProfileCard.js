import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const ProfileCard = (props) => {
    const {id, first_name, last_name, username, is_student, image_url} = props

    const classes = useStyles();

    return(
        <div>
            { image_url === null ? 
            <div >
            <Avatar alt="profile" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className={classes.large} />
            <button>Add a Profile Picture</button>
            </div>
            : null}
            <div>Name: {first_name} {last_name}</div>
            <div>Username: {username}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.userReducer.currentUser
}

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginBottom: "20px",
      marginTop: "20px"
    },
  }));

export default connect(mapStateToProps)(ProfileCard)