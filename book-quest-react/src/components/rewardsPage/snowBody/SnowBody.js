import React from 'react'
import SnowButtons from './SnowButtons'
import SnowArms from './SnowArms'
import { useSelector } from "react-redux";

const SnowBody = (props) => {

    const rewards = useSelector(state => state.userReducer.currentUser.rewards_hash)

    return(
        <div class="body">
                <div class="shadow2"></div>
                {rewards["buttons"] ? <SnowButtons /> : null}
                {rewards["arms"] ? <SnowArms />  : null}   
            </div>
    )
}

export default SnowBody