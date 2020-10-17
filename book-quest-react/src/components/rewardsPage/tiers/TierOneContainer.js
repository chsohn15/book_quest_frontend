import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { creatingReward } from '../../../redux/actions.js' 
import { useSelector } from "react-redux";

const TierOneContainer = (props) => {

    const student_id = useSelector(state => state.userReducer.currentUser.id)
    const level = 1
    const body_price = 25
    const body_description = "body"
    const face_price = 20
    const face_description = "face"


    return(
        <React.Fragment>
            <div>Tier One Container</div>
            <button onClick={() => props.creatingReward(body_price, level, student_id, body_description)}>Build the Body of Your Snowman</button>
            <button onClick={() => props.creatingReward(face_price, level, student_id, face_description)}>Add a Face to Your Snowman</button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    creatingReward: (price, level, student_id, description) => { dispatch( creatingReward(price, level, student_id, description) )}
    
})

export default connect(null, mapDispatchToProps)(TierOneContainer)