import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const SignUp = (props) => {

    const [first_name, changeFirstName] = useState("")
    const [last_name, changeLastName] = useState("")
    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")

    const directToBookSearch = () => {
        props.history.push('/book_search')
    }
    
    const handleSignUp = (e, first_name, last_name, username, password) => {
        e.preventDefault()
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name, last_name, username, password
            })
        }
        fetch("http://localhost:3000/api/v1/users", configObj)
        .then(res => res.json())
        .then(userInfo => {
            //Save information to local storage
            localStorage.token = userInfo.token 
            localStorage.user_id = userInfo.id 
            localStorage.username = userInfo.username 
            
            // Add user information to store
            props.addUser(
            userInfo.id, 
            userInfo.first_name, 
            userInfo.last_name, 
            userInfo.username, 
            userInfo.is_student)

            directToBookSearch()
        })

    }
    
    return(
        <div>
            <div>Sign Up Here</div>
            <form onSubmit={(e) => handleSignUp(e, first_name, last_name, username, password)}>
                <label>First Name</label>
                <input onChange={(e) => changeFirstName(e.target.value)} name="first_name" type="text" /><br />
                <label>Last Name</label>
                <input onChange={(e) => changeLastName(e.target.value)} name="last_name" type="text" /><br />
                <label>Username</label>
                <input onChange={(e) => changeUserName(e.target.value)} name="username" type="text" /><br />
                <label>Password</label>
                <input onChange={(e) => changePassword(e.target.value)} name="password" type="password" /><br />
                <input type="submit"/>

        </form>
        </div>
    )

}


const mapDispatchToProps = dispatch => {
    return {
        addUser: ((id, first_name, last_name, username, is_student) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student}}))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)