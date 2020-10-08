import React from 'react';
import ProfileCard from './ProfileCard.js'
import { NavLink } from "react-router-dom";

const UserHomeContainer = (props) => {
    return(
        <div>
            User Home Container
            <ProfileCard />
            <NavLink to="/book_viewer">Read Your Book!</NavLink>
        </div>
    )
}

export default UserHomeContainer