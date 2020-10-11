import React from 'react';
import ProfileCard from './ProfileCard.js'
import CurrentBookCard from './CurrentBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import ActivityContainer from './ActivityContainer.js'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { loadingBooks } from '../../redux/actions.js'
import { loadingCurrentBook } from '../../redux/actions.js'
import { connect } from 'react-redux'

const UserHomeContainer = (props) => {

    useEffect(() => {
        props.loadingCurrentBook()
        props.loadingBooks()
    }, [])

    return(
        <div>
            <div>User Home Container</div><br/>
            <ProfileCard /><br />
            <ActivityContainer /><br/>
            <CurrentBookCard /><br />
            <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
            <UserBookShelf /><br />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )},
    loadingCurrentBook: () => { dispatch( loadingCurrentBook() )}
})

export default connect(null, mapDispatchToProps)(UserHomeContainer)