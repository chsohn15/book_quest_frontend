import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react'
import { connect } from 'react-redux'
import { addingReadingTweet, handlingStreak } from '../../../redux/actions.js'

const TweetForm = (props) => {

    const tweetsArray = useSelector(state => state.userReducer.currentUser.all_tweets)
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

    const handleSubmit = (e, tweetsArray) => {
     
        e.preventDefault()
        // if (tweetsArray.length > 0 &&  tweetsArray[tweetsArray.length - 1].created_at 
        


        props.addingReadingTweet(e, submission, point_value, student_book_id, character_id)
    }

    return(
    <div>
        <form onSubmit={(e) => handleSubmit(e, tweetsArray)}>
            <label>Write {name}'s Next Lit Tweet and Earn Five Points!</label><br />
            <textarea onChange={(e)=> changeTweet(e.target.value)}></textarea><br />
            {charactersLeft()}
            <input type="submit"/>
        </form>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingReadingTweet: (e, submission, point_value, student_book_id, character_id) => { dispatch( addingReadingTweet(e, submission, point_value, student_book_id, character_id) )},
    // handlingStreak: () => { dispatch( handlingStreak() )}
})

export default connect(null, mapDispatchToProps)(TweetForm)