import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const LogIn = (props) => {

    const [username, changeUserName] = useState("")
    const [password, changePassword] = useState("")
    const [errors, addErrors] = useState([])

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
        .then(userInfo => {
            if (userInfo.error){
                addErrors([...errors, userInfo.error])
                localStorage.errors = true;
            }
            else {
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
            userInfo.is_student,
            userInfo.total_points,
            userInfo.streak)
        
            goToUserPage()
            }
        })}
    
        const goToUserPage = () => {
            props.history.push("/user_home");
          };

    return(
        <div>
            <div>Log in Here</div>
                <form onSubmit={(e) => handleLogIn(e, username, password)}>
                <label>Username</label>
                <input name="username" type="text" onChange={(e)=> changeUserName(e.target.value)}/>
                <label>Password</label>
                <input name="password" type="password" onChange={(e)=> changePassword(e.target.value)}/>
                <input type="submit" value="Log in"/>
                </form>
                {errors.length > 0 ? 
                errors.map(error => <div>{error}</div>) : null}
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addUser: ((id, first_name, last_name, username, is_student, total_points, streak) => dispatch({type: 'ADD_USER', payload: {id, first_name, last_name, username, is_student, total_points, streak}}))
    }
}

export default connect(null, mapDispatchToProps)(LogIn)