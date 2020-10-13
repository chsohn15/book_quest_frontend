import React from 'react'
import { useSelector } from "react-redux";
import Tweet from "./Tweet.js"

const TweetsContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets.reverse())

    return(
    <div>
        <div>All Tweets:</div>
        {tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)}
    </div>
    )
}

export default TweetsContainer