import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const RewardsContainer = (props) => {

    const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <div>Rewards Container</div>
            <div>Stars: {total_points}</div>
            <div>Streak: {streak}</div>
            <div>Badges: </div>
            <NavLink to="progress_chart">
                See My Progress
            </NavLink>
        </div>
    )
}

export default RewardsContainer