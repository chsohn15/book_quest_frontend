import React from 'react'
import { useState } from 'react'
//import { connect } from 'react-redux'

const SignUp = () => {

    const [first_name, changeFirstName] = useState("")
    const [last_name, changeLastName] = useState("")
    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")

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
        .then(user => console.log(user))

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
                <input onChange={(e) => changePassword(e.target.value)} name="password" type="text" /><br />
                <input type="submit"/>

        </form>
        </div>
    )

}

export default SignUp