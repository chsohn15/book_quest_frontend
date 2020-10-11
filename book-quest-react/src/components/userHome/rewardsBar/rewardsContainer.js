import React from 'react'
import { useSelector } from "react-redux";

const RewardsContainer = (props) => {

    const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <div>Rewards Container</div>
            <div>Stars: {total_points}</div>
            <div>Streak: {streak}</div>
            <div>Badges: </div>
        </div>
    )
}

export default RewardsContainer