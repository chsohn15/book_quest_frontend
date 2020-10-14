import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadingAllTweets } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import Tweet from './Tweet.js'

const AllTweets = (props) => {

    useEffect(() => {
        props.loadingAllTweets()
        
    }, [])

    const allTweets = useSelector(state => state.allTweetsReducer.allTweets)
    const reversed_tweets = [...allTweets].reverse()

    return(
    <div>
        <div>List of All Tweets by a User</div>
        {reversed_tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)}
    </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        loadingAllTweets: (() => {{ dispatch( loadingAllTweets() )}
    })}}

export default connect(null, mapDispatchToProps)(AllTweets)