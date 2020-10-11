import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'
import { useSelector } from "react-redux";


const ReadingTweetContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)

    return(
    <div>
        <div>Lit Tweets!</div>
        <CharacterSelectForm /><br/>
        <CharacterProfileCard/>
        <TweetForm />
        {tweets.length > 0 ? 
        <TweetsContainer />
        :
        null}
    </div>
    )
}

export default ReadingTweetContainer