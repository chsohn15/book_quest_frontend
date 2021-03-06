import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from './components/SignUp.js'
import SignUp2 from './components/SignUp2.js'
import LogIn from './components/LogIn.js'
import Welcome from './components/Welcome.js'
import BookSearchContainer from './components/bookSearch/BookSearchContainer.js'
import UserHomeContainer from './components/userHome/UserHomeContainer.js'
import BookViewer from './components/userHome/books/BookViewer.js'
import ReadingTweetContainer from './components/userHome/readingTweets/ReadingTweetContainer.js'
import AllTweets from './components/userHome/readingTweets/AllTweets.js'
import ProgressChartContainer from './components/progressCharts/ProgressChartsContainer.js'
import VocabContainer from './components/userHome/vocab/VocabContainer.js'
import BasicVocab from './components/userHome/vocab/BasicVocabContainer.js'
import AddCharacterForm from './components/userHome/readingTweets/AddCharacterForm.js'
import SnowManContainer from './components/rewardsPage/SnowManContainer.js';
import { connect } from 'react-redux'

function App(props) {
  
  return (
    <div className="App">
      <Router>
      {/* <NavLink  style={{padding: "12px", "justifyContent": "right"}} onClick={logOut} to="/">Log Out</NavLink> */}
        {/* <Route exact path = "/signup" component={SignUp2}>
        </Route> */}

        {/* <Route exact path = "/login" component={LogIn}>
        </Route> */}
        <Route exact path = "/" component={Welcome}>
        </Route>
        <Route exact path = "/book_search" component={BookSearchContainer}>
        </Route>
        <Route exact path = "/user_home" component={UserHomeContainer}>
        </Route>
        <Route exact path = "/character_form" component={AddCharacterForm}>
        </Route>

        <Route exact path = "/progress_chart" component={ProgressChartContainer}>
        </Route>

        <Route exact path = "/snow_man" component={SnowManContainer}>
        </Route>
        <Route exact path = "/reading_tweet" component={ReadingTweetContainer}>
        </Route>
        <Route exact path = "/all_tweets" component={AllTweets}>
        </Route>
        <Route exact path = "/vocab" component={VocabContainer}>
        </Route>
        <Route exact path = "/basic_vocab" component={BasicVocab}>
        </Route>
        <Route exact path = "/book_viewer" render = {(routerProps) => (
          <BookViewer {...routerProps}/>
        )}>
        </Route>
      </Router>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => { dispatch( {type: 'USER_LOGOUT'} )}
}) 

export default connect(null, mapDispatchToProps)(App)
