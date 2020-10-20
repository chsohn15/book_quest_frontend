import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import AddCharacterForm from './AddCharacterForm'



const ReadingTweetContainer = (props) => {

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    const twitter_character = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)
    //const existing_characters = useSelector(state => state.currentBookReducer.currentBook.book.characters)

    if (current_book_status === 500){
        return(
            <div>Add a Book to "Currently Reading" to Start Writing Tweets!</div>
        )
    }

    if (props.characters.length > 0){
        return(
            <div>
                <h2>Lit Tweets!</h2>
                    
                <NavLink to="/all_tweets">See My Tweets of All Time!</NavLink><br />
            <br/>
                    <div>
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
            </div>
        )
    }
    else if (props.characters.length === 0){
        return(
            <div>
                <br />
                <div>No Characters Exist for This Book Yet!</div>
                <br />
                <div>Add a Character to This Book:</div>
                <br />
                <AddCharacterForm />
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