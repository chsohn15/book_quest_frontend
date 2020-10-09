import React from 'react';
import ProfileCard from './ProfileCard.js'
import UserBookCard from './UserBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import ActivityContainer from './ActivityContainer.js'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react'
import { loadingBooks } from '../../redux/reducers/actions.js'
import { connect } from 'react-redux'

const UserHomeContainer = (props) => {

    useEffect(() => {
        props.loadingBooks()
    }, [])

    return(
        <div>
            User Home Container
            <ProfileCard /><br />
            {/* <UserBookCard /><br /> */}
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