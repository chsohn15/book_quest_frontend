import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react'
import { connect } from 'react-redux'
import { addingReadingTweet, loadingUser } from '../../../redux/actions.js'
import Form from 'react-bootstrap/Form';

const TweetForm = (props) => {

    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const character_id = id
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)
    const point_value = 5

    const [submission, changeTweet] = useState("")

    const charactersLeft = () => {
        if (280- submission.length >= 0){
            return <div>Characters Left: {280 - submission.length}</div>
        }
        else{
            return (<div style={{color: "red"}}>You've gone over the character limit by {280 - submission.length} characters </div>)
        }
    }

    const handleSubmit = (e) => {
     
        e.preventDefault()
        
        props.addingReadingTweet(e, submission, point_value, student_book_id, character_id)
        setTimeout(function(){props.loadingUser()}, 1000) // load user to fetch new streak
    }

    return(
    <div>
        <Form.Group controlId="exampleForm.ControlTextarea1" onSubmit={(e) => handleSubmit(e)}>
            <Form.Label>Write {name}'s Next Lit Tweet and Earn Five Points!</Form.Label><br />
            <Form.Control as="textarea" rows={3} onChange={(e)=> changeTweet(e.target.value)}></Form.Control><br />
            {charactersLeft()}
            <input type="submit"/>
        </Form.Group>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingReadingTweet: (e, submission, point_value, student_book_id, character_id) => { dispatch( addingReadingTweet(e, submission, point_value, student_book_id, character_id) )},
    loadingUser: () => { dispatch( loadingUser())}
})

export default connect(null, mapDispatchToProps)(TweetForm)