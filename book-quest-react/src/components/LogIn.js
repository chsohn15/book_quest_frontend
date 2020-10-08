import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const LogIn = (props) => {

    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")

    const handleLogIn = (e, username, password) => {
        e.preventDefault()
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        }
        fetch("http://localhost:3000/api/v1/login", configObj)
        .then(res => res.json())
        .then(userInfo => props.addUser(
            userInfo.id, 
            userInfo.first_name, 
            userInfo.last_name, 
            userInfo.username, 
            userInfo.is_student))
        
        //props.addUser(username, password)
    }

    return(
        <div>
        <div>
            <div>Log in Here</div>
                <form onSubmit={(e) => handleLogIn(e, username, password)}>
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
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: ((id, first_name, last_name, username, is_student) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student}}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)