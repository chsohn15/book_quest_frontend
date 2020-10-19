import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from './ProfileCard'
import CurrentBookCard from './CurrentBookCard'
import RewardsBar from './rewardsBar/rewardsBar.js'
import BookViewer from './books/BookViewer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container style={{marginLeft: "10px"}}>
        <Row>
        <Col xs={2}>
            <ProfileCard /> 
            <CurrentBookCard /><br />
                     { current_book_status !== 500 ?
                     <div>
                         <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
                         <br/>
                     </div>
                     : null}
            </Col>
            <Col xs={6}>
            <BookViewer />
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ProfileContainer