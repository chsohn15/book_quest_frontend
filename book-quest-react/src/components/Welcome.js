import React from 'react'

const Welcome = (props) => {

    const goToSignUpPage = () => {
        props.history.push("/signup");
      };

    return(
        <div id="welcome-container">
            <button onClick={() => goToSignUpPage()}>Sign Up Today!</button>
            <button>Login</button>
        </div>
    )
}

export default Welcome