import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import BookSearchContainer from './components/bookSearch/BookSearchContainer.js'
import UserHomeContainer from './components/userHome/UserHomeContainer.js'
import BookViewer from './components/userHome/books/BookViewer.js'
import ReadingTweetContainer from './components/userHome/readingTweets/ReadingTweetContainer.js'
import AllTweets from './components/userHome/readingTweets/AllTweets.js'
import ProgressChartContainer from './components/progressCharts/ProgressChartsContainer.js'
import VocabContainer from './components/userHome/vocab/VocabContainer.js'
import BasicVocab from './components/userHome/vocab/BasicVocabContainer.js'
import RewardsPage from './components/rewards/rewardsPage.js';

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

        <Route exact path = "/progress_chart" component={ProgressChartContainer}>
        </Route>
        <Route exact path = "/rewards_page" component={RewardsPage}>
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

export default App;
