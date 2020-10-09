import React from 'react';
import { connect } from 'react-redux'

const ProfileCard = (props) => {
    const {id, first_name, last_name, username, is_student} = props

    return(
        <div>
            User Profile Information
            <div>Name: {first_name} {last_name}</div>
            <div>Username: {username}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.currentUser
}

export default connect(mapStateToProps)(ProfileCard)