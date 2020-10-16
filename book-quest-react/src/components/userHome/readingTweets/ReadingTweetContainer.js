import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";


const ReadingTweetContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    const twitter_character = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)

    
    if (current_book_status === 500){
        return(
            <div>Add a Book to "Currently Reading" to Start Writing Tweets!</div>
        )
    }

    if (props.characters.length > 0){
        return(
            <div>
                <div>Lit Tweets!</div>
                    
                <NavLink to="/all_tweets">See My Tweets of All Time!</NavLink><br />
            <br/>

                    {twitter_character ? 
                    <div>
                        <CharacterProfileCard/>
                        <TweetForm />
                    </div>
                    : 
                    <div>
                    <CharacterSelectForm /><br/>
                    </div>}
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