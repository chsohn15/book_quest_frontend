import React from 'react';
import ProfileCard from './ProfileCard.js'
import CurrentBookCard from './CurrentBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import ActivityContainer from './ActivityContainer.js'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { loadingBooks } from '../../actions.js'
import { connect } from 'react-redux'

const UserHomeContainer = (props) => {

    useEffect(() => {
        props.loadingBooks()
    }, [])

    return(
        <div>
            User Home Container
            <ProfileCard /><br />
            <CurrentBookCard /><br />
            <UserBookShelf /><br />
            <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
            <ActivityContainer />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )}
})

export default connect(null, mapDispatchToProps)(UserHomeContainer)