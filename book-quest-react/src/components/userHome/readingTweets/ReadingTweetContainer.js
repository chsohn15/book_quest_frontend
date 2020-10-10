import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'

const ReadingTweetContainer = (props) => {
    return(
    <div>
        <div>Lit Tweets!</div>
        <CharacterSelectForm /><br/>
        <CharacterProfileCard/>
    </div>
    )
}

export default ReadingTweetContainer