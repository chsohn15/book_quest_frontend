import React from 'react'
import './SnowMan.css'
import SnowBody from './snowBody/SnowBody.js'
import SnowScarf from './SnowScarf.js'
import SnowFace from './snowFace/SnowFace.js'
import SnowFall from './SnowFall.js'
import { useSelector } from "react-redux";



    

const SnowManContainer = (props) => {

    const rewards = useSelector(state => state.userReducer.currentUser.rewards_hash)

    //debugger
    return(
        <div id="snow-main-container">
            <div>Here is a Snowman</div>
            <div class="backg">
        <div class="snowman">
            {rewards["face"] ? <SnowFace /> : null}
            {rewards["body"] ? <SnowBody /> : null}
            <SnowScarf />
        </div>
          
    </div>
    <div class="snow"></div>
    <SnowFall />
        </div>
    )
}

export default SnowManContainer