import React from 'react'
import './SnowMan.css'

const SnowManContainer = (props) => {

    return(
        <div id="snow-main-container">
            <div>Here is a Snowman</div>
            <div class="backg">
        <div class="snowman">
            
            <div class="face">
                <div class="shadow1">
                    <div class="eyel"></div>
                    <div class="eyer"></div>
                    <div class="nose"></div>
                    <div class="hat">
                        <div class="h-top"></div>
                    </div>
                </div>
                
            </div>
            <div class="body">
                <div class="shadow2"></div>
                <div class="buttons">
                    <div class="b1"></div>
                    <div class="b2"></div>
                    <div class="b3"></div>
                </div>
                <div class="hand-l">
                    <div class="s1"></div>
                </div>
                <div class="hand-r">
                    <div class="s2"></div>
                </div>
            </div>
            <div class="scarf">
                <div class="sc1"></div>
                <div class="sc2"></div>
            </div>
        </div>
          
    </div>
    <div class="snow"></div>
    <div class="snowfall"></div>
        </div>
    )
}

export default SnowManContainer