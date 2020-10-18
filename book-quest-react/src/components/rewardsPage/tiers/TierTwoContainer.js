import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { creatingReward } from '../../../redux/actions.js' 
import { useSelector } from "react-redux";

const TierTwoContainer = (props) => {

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 2
    const buttons_price = 15
    const buttons_description = "buttons"

    const eyes_price = 15
    const eyes_description = "eyes"

    const nose_price = 20
    const nose_description = "nose"

    return(
        <React.Fragment>
            <div>Tier Two Container</div>
            <button onClick={() => props.creatingReward(buttons_price, level, student_id, buttons_description)}>Add Buttons</button>
            <button onClick={() => props.creatingReward(eyes_price, level, student_id, eyes_description)}>Add Eyes</button>
            <button onClick={() => props.creatingReward(nose_price, level, student_id, nose_description)}>Add a Carrot Nose</button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    creatingReward: (price, level, student_id, description) => { dispatch( creatingReward(price, level, student_id, description) )}
    
})

export default connect(null, mapDispatchToProps)(TierTwoContainer)