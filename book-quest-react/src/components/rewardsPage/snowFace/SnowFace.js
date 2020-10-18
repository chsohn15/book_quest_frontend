import React from 'react'
import SnowEyes from './SnowEyes.js'
import SnowNose from './SnowNose.js'
import SnowHat from './SnowHat.js'
import { useSelector } from "react-redux";

const SnowFace = (props) => {

    const rewards = useSelector(state => state.userReducer.currentUser.rewards_hash)

    return(
        <div class="face">
            <div class="shadow1">
                    {rewards["eyes"] ? <SnowEyes /> : null}
                    {rewards["nose"] ? <SnowNose /> : null}
                    {rewards["hat"] ? <SnowHat /> : null}
                </div> 
            </div>
    )
}

export default SnowFace