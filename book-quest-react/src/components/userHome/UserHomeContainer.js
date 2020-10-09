import React from 'react';
import ProfileCard from './ProfileCard.js'
import UserBookCard from './UserBookCard.js'
import UserBookShelf from './books/UserBookShelf.js'
import ActivityContainer from './ActivityContainer.js'
import { NavLink } from "react-router-dom";

const UserHomeContainer = (props) => {
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

export default UserHomeContainer