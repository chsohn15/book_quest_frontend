import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react'
import { connect } from 'react-redux'
import { addingReadingTweet, loadingUser } from '../../../redux/actions.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TweetForm = (props) => {

    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const character_id = id
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)
    const point_value = 5

    const [submission, changeTweet] = useState("")

    const charactersLeft = () => {
        if (280- submission.length >= 0){
            return <div style={{marginLeft: '90px'}}>Characters Left: {280 - submission.length}</div>
        }
        else{
            return (<span style={{color: "red"}}>You've gone over the character limit by {280 - submission.length} characters </span>)
        }
    }

    const handleSubmit = (e) => {
     
        e.preventDefault()
       
        props.addingReadingTweet(e, submission, point_value, student_book_id, character_id)
        setTimeout(function(){props.loadingUser()}, 1000) // load user to fetch new streak
    }

    return(
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1" >
            <Form.Label style={{fontFamily: "'Lato', sans-serif", fontSize: "15px"}}>Write {name}'s Next Lit Tweet and Earn Five Stars!</Form.Label><br />
            <Form.Control  as="textarea" rows={3} onChange={(e)=> changeTweet(e.target.value)} style={{width: "294px"}}></Form.Control><br />
            <div className="d-flex align-items-center">
            {charactersLeft()}
            <Button  variant="light" type="submit" style={{backgroundColor:"#00ACEE", color:"white", marginLeft: '3px',marginRight: '10px'}}>Tweet</Button>
            </div>
        </Form.Group>
        </form>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingReadingTweet: (e, submission, point_value, student_book_id, character_id) => { dispatch( addingReadingTweet(e, submission, point_value, student_book_id, character_id) )},
    loadingUser: () => { dispatch( loadingUser())}
})

export default connect(null, mapDispatchToProps)(TweetForm)