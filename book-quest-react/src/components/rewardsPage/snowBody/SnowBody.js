import React from 'react'
import SnowButtons from './SnowButtons'
import SnowArms from './SnowArms'

const SnowBody = (props) => {

    return(
        <div class="body">
                <div class="shadow2"></div>
                <SnowButtons />
                <SnowArms /> 
            </div>
    )
}

export default SnowBody