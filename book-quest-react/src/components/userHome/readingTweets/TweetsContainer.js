import React from 'react'
import { useSelector } from "react-redux";
import Tweet from "./Tweet.js"

const TweetsContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    const reversed_tweets = [...tweets].reverse()
    return(
    <div>
        {reversed_tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)}
    </div>
    )
}

export default TweetsContainer