import React from 'react'
import SnowEyes from './SnowEyes.js'
import SnowNose from './SnowNose.js'
import SnowHat from './SnowHat.js'

const SnowFace = (props) => {

    return(
        <div class="face">
            <div class="shadow1">
                    <SnowEyes />
                    <SnowNose />
                    <SnowHat />
                </div> 
            </div>
    )
}

export default SnowFace