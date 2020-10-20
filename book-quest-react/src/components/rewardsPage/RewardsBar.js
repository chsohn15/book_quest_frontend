import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import RewardsPage from './rewardsPage.js'
import WhatshotIcon from '@material-ui/icons/Whatshot';

const RewardsBar = (props) => {

    const { total_points, streak, balance, vocab_streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <h4>My Rewards</h4>
            <h4>Stars: {balance}</h4>
            <h4>Tweet Streak: {streak} <WhatshotIcon /></h4>
            <h4>Vocabulary Streak: {vocab_streak} <WhatshotIcon /></h4>
            <NavLink to="/snow_man">Click Here to See Your Snowman!</NavLink>
            <RewardsPage />
        </div>
    )
}

export default RewardsBar