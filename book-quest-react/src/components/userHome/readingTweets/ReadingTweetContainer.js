import React from 'react'
import CharacterSelectForm from './CharacterSelectContainer'
import CharacterProfileCard from './CharacterProfileCard'
import TweetForm from './TweetForm'
import TweetsContainer from './TweetsContainer'
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import AddCharacterForm from './AddCharacterForm'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';



const ReadingTweetContainer = (props) => {

    const classes = useStyles();

    const tweets = useSelector(state => state.currentBookReducer.currentBook.reading_tweets)
    const twitter_character = useSelector(state => state.currentBookReducer.currentBook.twitter_character)
    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)
    //const existing_characters = useSelector(state => state.currentBookReducer.currentBook.book.characters)

    if (current_book_status === 500){
        return(
            <h3>Add a Book to "Currently Reading" to Start Writing Lit Tweets!</h3>
        )
    }

    if (props.characters.length > 0){
        return(
            <div className={classes.root}>
                <h2 style={{fontFamily: "'Comfortaa', cursive", fontSize:'35px',color:"#00ACEE"}}><TwitterIcon style={{color:"#00ACEE", fontSize: '45px'}}/> Lit Tweets!</h2>
            <br/>
                    <Grid container spacing={3}>
                    {twitter_character ? 
                    <Grid item xs={3}>
                        <CharacterProfileCard/><br />
                        <TweetForm />
                    </Grid>
                    : 
                    <Grid item xs={3}>
                    <CharacterSelectForm /><br/>
                    </Grid>}

                    {tweets.length > 0 ? 
                    <Grid item xs={6}>
                        <TweetsContainer />
                    </Grid>
                        
                    :
                        null}
                    </Grid>
            </div>
        )
    }
    else if (props.characters.length === 0){
        return(
            <div>
                <br />
                <h4>No Characters Exist for This Book Yet!</h4>
                <br />
                <h4>Add a Character to This Book:</h4>
                <br />
                <AddCharacterForm />
            </div>
        )
    }
    else{
        return(
            <div>
                <div style={{fontFamily: "'Source Code Pro', monospace;"}}>Lit Tweets!</div>
                <CharacterSelectForm /><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.currentBookReducer.currentBook.status !== 500 && state.currentBookReducer.currentBook.id){
    return {characters: state.currentBookReducer.currentBook.book.characters}
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default connect(mapStateToProps)(ReadingTweetContainer)