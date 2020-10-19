import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import RewardsPage from './rewardsPage.js'

const RewardsBar = (props) => {

    const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <h4>My Rewards</h4>
            <h4>Stars: {total_points}</h4>
            <h4>Tweet Streak: {streak}</h4>

            <RewardsPage />
        </div>
    )
}

export default RewardsBar