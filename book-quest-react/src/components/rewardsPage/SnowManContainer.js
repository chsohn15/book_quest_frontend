import React from 'react'
import './SnowMan.css'
import SnowBody from './SnowBody.js'
import SnowScarf from './SnowScarf.js'
import SnowFace from './SnowFace.js'
import SnowFall from './SnowFall.js'

const SnowManContainer = (props) => {

    return(
        <div id="snow-main-container">
            <div>Here is a Snowman</div>
            <div class="backg">
        <div class="snowman">
            <SnowFace />
            <SnowBody />
            <SnowScarf />
        </div>
          
    </div>
    <div class="snow"></div>
    {/* <SnowFall /> */}
        </div>
    )
}

export default SnowManContainer