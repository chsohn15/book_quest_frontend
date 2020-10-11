import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'
import { useSelector } from "react-redux";
import { connect } from 'react-redux'


const ReadingTweetContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    const twitter_character = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    
    if (props.characters.length > 0){
        return(
            <div>
                <div>Lit Tweets!</div>
                    <CharacterSelectForm /><br/>
                    {twitter_character ? 
                    <div>
                        <CharacterProfileCard/>
                        <TweetForm />
                    </div>
                    : 
                    null}
                    {tweets.length > 0 ? 
                        <TweetsContainer />
                    :
                        null}
            </div>
        )
    }
    else{
        return(
            <div>
                <div>Lit Tweets!</div>
                <CharacterSelectForm /><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.currentBookReducer.currentBook.status !== 500){
    return {characters: state.currentBookReducer.currentBook.book.characters}
    }
}

export default connect(mapStateToProps)(ReadingTweetContainer)