import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'


const ReadingTweetContainer = (props) => {
    return(
    <div>
        <div>Lit Tweets!</div>
        <CharacterSelectForm /><br/>
        <CharacterProfileCard/>
        <TweetForm />
        <TweetsContainer />
    </div>
    )
}

export default ReadingTweetContainer