import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import AddPhotoForm from './AddPhotoForm.js'
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'react-bootstrap/Button'


const ProfileCard = (props) => {
    const {id, first_name, last_name, username, is_student, image_url} = props

    const classes = useStyles();

    const [btnClicked, changeBtnClicked] = React.useState(false);
    const [editBtnClicked, changeEditBtnClicked] = React.useState(false);

    return(
        <div>
            { image_url === null ? 
            <div >
                <Avatar alt="profile" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className={classes.large} />
                <h5 style={{fontFamily: "'Lato', sans-serif", marginLeft: '10px'}}><strong>{first_name} {last_name}</strong></h5>
                <Button variant="outline-dark" onClick={() => changeBtnClicked(!btnClicked)}>Add a Profile Picture</Button>
            </div>
            : 
            <div>
                <Avatar alt="profile" src={image_url} style={{width: '130px'}} className={classes.large} />
                <h5 style={{fontFamily: "'Lato', sans-serif", marginLeft: '10px'}}><strong>{first_name} {last_name}</strong></h5>
                <Tooltip title="Edit Photo" style={{cursor: "pointer", marginLeft: '50px'}}>
                    <ExpandMoreIcon onClick={() => changeEditBtnClicked(!editBtnClicked)}/>
                </Tooltip>
                {/* <button onClick={() => changeEditBtnClicked(!editBtnClicked)}>Edit Photo</button> */}
            </div>}

            {btnClicked ? <AddPhotoForm btnClicked={btnClicked} changeBtnClicked={changeBtnClicked}/> : null}

            {editBtnClicked ? <AddPhotoForm btnClicked={editBtnClicked} changeBtnClicked={changeEditBtnClicked} />  : null}

           

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
      marginTop: "20px",

    },
  }));

export default connect(mapStateToProps)(ProfileCard)