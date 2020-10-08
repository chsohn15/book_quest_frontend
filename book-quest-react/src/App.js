import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import BookSearchContainer from './components/bookSearch/BookSearchContainer.js'


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
        <Route exact path = "/login" render = {(routerProps) => (
          <LogIn />
        )}>
        </Route>
        <Route exact path = "/book_search" render = {(routerProps) => (
          <BookSearchContainer />
        )}>
        </Route>
      </Router>

    </div>
  );
}

export default App;
