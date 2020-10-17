import React from 'react'

const Welcome = (props) => {

    const goToSignUpPage = () => {
        props.history.push("/signup");
      };

      const goToLoginPage = () => {
        props.history.push("/login");
      };

    return(
        <div id="welcome-container">
            <button onClick={() => goToSignUpPage()}>Sign Up Today!</button>
            <button onClick={() => goToLoginPage()}>Login</button>
        </div>
    )
}

export default Welcome