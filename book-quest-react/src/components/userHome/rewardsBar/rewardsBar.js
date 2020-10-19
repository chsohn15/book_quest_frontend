import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import RewardsPage from '../../rewardsPage/RewardsPage.js'

const RewardsBar = (props) => {

    const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <div>Rewards Bar</div>
        
            <div>Stars: {total_points}</div>
            <div>Tweet Streak: {streak}</div>
            <div>Badges: </div>
            <RewardsPage />
        </div>
    )
}

export default RewardsBar