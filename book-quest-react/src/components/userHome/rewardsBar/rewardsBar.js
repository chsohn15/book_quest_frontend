import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const RewardsBar = (props) => {

    const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <div>Rewards Bar</div>
            <div>Stars: {total_points}</div>
            <div>Streak: {streak}</div>
            <div>Badges: </div>
            <NavLink to="progress_chart">
                See My Progress
            </NavLink><br />
            <NavLink to="rewards_page">
                Redeem My Rewards!
            </NavLink>
        </div>
    )
}

export default RewardsBar