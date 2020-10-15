import React from 'react';
import ProfileCard from './ProfileCard.js'
import CurrentBookCard from './CurrentBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import ActivityContainer from './ActivityContainer.js'
import RewardsBar from './rewardsBar/rewardsBar.js'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { loadingBooks } from '../../redux/actions.js'
import { loadingCurrentBook } from '../../redux/actions.js'
import { loadingUser } from '../../redux/actions.js'
import { connect } from 'react-redux'
//import { loadingAllTweets } from '../../redux/actions.js'

const UserHomeContainer = (props) => {

    useEffect(() => {
        props.loadingBooks()
        props.loadingCurrentBook()
        props.loadingUser()
        //props.loadingAllTweets()
    }, [])

    return(
        <div>
            <div>User Home Container</div><br/>
            <RewardsBar /><br />
            <ProfileCard /><br />
            <ActivityContainer /><br/>
            <CurrentBookCard /><br />
            <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
            <br/>
            <NavLink to="/book_search">Browse More Books</NavLink><br />
            <br/>
            <UserBookShelf /><br />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )},
    loadingCurrentBook: () => { dispatch( loadingCurrentBook() )},
    loadingUser: () => { dispatch( loadingUser() )},
    //loadingAllTweets: (() => {{ dispatch( loadingAllTweets() )}
}) 

export default connect(null, mapDispatchToProps)(UserHomeContainer)