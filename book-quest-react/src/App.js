import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import BookSearchContainer from './components/bookSearch/BookSearchContainer.js'
import UserHomeContainer from './components/userHome/UserHomeContainer.js'
import BookViewer from './components/userHome/BookViewer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Book Quest
      </header>
      <Router>
        <Route exact path = "/signup" render = {(routerProps) => (
          <SignUp {...routerProps}/>
        )}>
        </Route>
        <Route exact path = "/login" render = {(routerProps) => (
          <LogIn {...routerProps}/>
        )}>
        </Route>
        <Route exact path = "/book_search" render = {(routerProps) => (
          <BookSearchContainer {...routerProps}/>
        )}>
        </Route>
        <Route exact path = "/user_home" render = {(routerProps) => (
          <UserHomeContainer {...routerProps}/>
        )}>
        </Route>
        <Route exact path = "/book_viewer" render = {(routerProps) => (
          <BookViewer {...routerProps}/>
        )}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
