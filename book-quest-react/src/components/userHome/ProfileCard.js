import React from 'react';
import { connect } from 'react-redux'

const ProfileCard = (props) => {
    const {id, first_name, last_name, username, is_student} = props

    return(
        <div>
            <div>Name: {first_name} {last_name}</div>
            <div>Username: {username}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.userReducer.currentUser
}

export default connect(mapStateToProps)(ProfileCard)