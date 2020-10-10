import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'

const ReadingTweetContainer = (props) => {
    return(
    <div>
        <div>Lit Tweets!</div>
        <CharacterSelectForm /><br/>
        <CharacterProfileCard/>
        <TweetForm />
    </div>
    )
}

export default ReadingTweetContainer