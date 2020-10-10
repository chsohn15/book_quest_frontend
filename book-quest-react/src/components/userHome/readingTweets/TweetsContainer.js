import React from 'react'
import { useSelector } from "react-redux";

const TweetsContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    debugger
    return(
    <div>
        <div>All Tweets:</div>

    </div>
    )
}

export default TweetsContainer