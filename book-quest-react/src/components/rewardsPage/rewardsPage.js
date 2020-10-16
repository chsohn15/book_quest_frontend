import React from 'react'
import { NavLink } from "react-router-dom";
import TierOneContainer from './tiers/TierOneContainer'
import TierTwoContainer from './tiers/TierTwoContainer'
import TierThreeContainer from './tiers/TierThreeContainer'

const RewardsPage = (props) => {

    return(
        <div>
            <div>Rewards Page</div>
            <br />
            <NavLink to="snow_man">See Your Snowman!</NavLink><br />
            <br />
            <TierOneContainer />
            <br />
            <TierTwoContainer />
            <br />
            <TierThreeContainer />
            <br />
        </div>
    )
}

export default RewardsPage