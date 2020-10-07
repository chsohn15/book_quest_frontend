import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from './components/SignUp.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Book Quest
      </header>
      <Router>
        <Route exact path = "/signup" render = {(routerProps) => (
          <SignUp />
        )}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
