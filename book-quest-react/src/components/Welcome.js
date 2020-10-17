import React from 'react'

const Welcome = (props) => {
    return(
        <div id="welcome-container">
            <h1 style={{color: "white"}}>Welcome to Book Quest!</h1>
            <h3 style={{color: "white"}}>An App Designed to Encourage Reading</h3>
            <button>Sign Up Today!</button>
            <button>Login</button>
        </div>
    )
}

export default Welcome