import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react'
import { connect } from 'react-redux'
import { addingReadingTweet, loadingUser } from '../../../redux/actions.js'

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
        
        // if (tweetsArray.length === 0 ){
        //     props.handledStreak()
        // }
        // if (tweetsArray.length > 0){
        //     let today = new Date().toDateString();
        //     let last_tweet_date = new Date(tweetsArray[tweetsArray.length - 1].created_at).toDateString();
        //     if (today !== last_tweet_date){
        //         props.handledStreak()
        //     }
        // }
        props.addingReadingTweet(e, submission, point_value, student_book_id, character_id)
        setTimeout(function(){props.loadingUser()}, 1000) // load user to fetch new streak
    }

    return(
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
    loadingUser: () => { dispatch( loadingUser())}
})

export default connect(null, mapDispatchToProps)(TweetForm)