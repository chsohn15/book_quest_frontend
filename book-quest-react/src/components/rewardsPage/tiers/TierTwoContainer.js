import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { creatingReward } from '../../../redux/actions.js' 
import { useSelector } from "react-redux";

const TierTwoContainer = (props) => {

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 2
    const buttons_price = 25
    const buttons_description = "body"

    const eyes_price = 20
    const eyes_description = "face"

    const nose_price = 20
    const nose_description = "face"

    return(
        <React.Fragment>
            <div>Tier Two Container</div>
            <button>Add Buttons</button>
            <button>Add Eyes</button>
            <button>Add a Carrot Nose</button>
        </React.Fragment>
    )
}

export default TierTwoContainer