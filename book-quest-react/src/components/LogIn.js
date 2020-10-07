import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const LogIn = (props) => {

    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")

    const handleForm = (e, username, password) => {
        e.preventDefault()
        props.addUser(username, password)
    }
    return(
        <div>
        <div>
            <div>Log in Here</div>
                <form onSubmit={(e) => handleForm(e, username, password)}>
                <label>Username</label>
                <input name="username" type="text" onChange={(e)=> changeUserName(e.target.value)}/>
                <label>Password</label>
                <input name="password" type="password" onChange={(e)=> changePassword(e.target.value)}/>
                <input type="submit" value="Log in"/>
                </form>
        </div>
        <button>Test Button</button>
        </div>
    )

}

const mapStateToProps = state => {
    return{
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: ((username, password) => dispatch({type: 'ADD_USER', payload: {username, password}}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)