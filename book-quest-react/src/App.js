import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import BookSearchContainer from './components/bookSearch/BookSearchContainer.js'
import UserHomeContainer from './components/userHome/UserHomeContainer.js'
import BookViewer from './components/userHome/BookViewer.js'
import ReadingTweetContainer from './components/userHome/readingTweets/ReadingTweetContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Book Quest
      </header>
      <Router>
        <Route exact path = "/signup" component={SignUp}>
        </Route>
        <Route exact path = "/login" component={LogIn}
        >
        </Route>
        <Route exact path = "/book_search" component={BookSearchContainer}>
        </Route>
        <Route exact path = "/user_home" component={UserHomeContainer}>
        </Route>
        <Route exact path = "/reading_tweet" component={ReadingTweetContainer}>
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
