import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { creatingReward } from '../../../redux/actions.js' 
import { useSelector } from "react-redux";

const TierThreeContainer = (props) => {
    const student_id = useSelector(state => state.userReducer.currentUser.id)
    // const errors = useSelector(state => state.errorsReducer.errors)

    const level = 3
    const scarf_price = 20
    const scarf_description = "scarf"

    const hat_price = 20
    const hat_description = "hat"
    
    return(
        <React.Fragment>
            <div>Tier Three Container</div>
            <button onClick={() => props.creatingReward(scarf_price, level, student_id, scarf_description)}>Add a Scarf</button>
            <button onClick={() => props.creatingReward(hat_price, level, student_id, hat_description)}>Add a Hat</button>
            </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    creatingReward: (price, level, student_id, description) => { dispatch( creatingReward(price, level, student_id, description) )}
    
})

export default connect(null, mapDispatchToProps)(TierThreeContainer)