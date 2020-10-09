import React from 'react';
import ProfileCard from './ProfileCard.js'
import UserBookCard from './UserBookCard.js'
import { NavLink } from "react-router-dom";

const UserHomeContainer = (props) => {
    return(
        <div>
            User Home Container
            <ProfileCard /><br />
            <UserBookCard /><br />
            <NavLink to="/book_viewer">Read Your Book!</NavLink><br />
        </div>
    )
}

export default UserHomeContainer