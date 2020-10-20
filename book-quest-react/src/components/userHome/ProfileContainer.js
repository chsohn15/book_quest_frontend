import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from './ProfileCard'
import CurrentBookCard from './CurrentBookCard'
import RewardsBar from '../rewardsPage/RewardsBar.js'
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
    const currentBook = useSelector(state => state.currentBookReducer.currentBook)
    const emptyBook = () => {
        return Object.keys(currentBook).length === 0 && currentBook.constructor === Object
    }
    const classes = useStyles();

    if (current_book_status === 500 || emptyBook()){

    return(
        <div>
        <Container style={{marginLeft: "10px"}}>
        <Row>
        <Col xs={2}>
            <ProfileCard /> 
            <CurrentBookCard /><br />
            </Col>
                     <div>
                         {/* <NavLink to="/book_viewer">Read Your Book!</NavLink><br /> */}
                         <br/>
                        
                        <Col xs={6}>
                        {/* <BookViewer />  */}
                        </Col>
                     </div>
            </Row>
            </Container>
        </div>
    )
    }
    else {
        
        return(
    <div>
        <Container style={{marginLeft: "10px"}}>
            <Row>
                <Col xs={2}>
                    <ProfileCard /> 
                    <CurrentBookCard /><br />
                </Col>
                    <br/>
                <Col xs={6}>
                    <BookViewer /> 
                </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default ProfileContainer