import React from 'react';
import ReadingTweetContainer from './readingTweets/ReadingTweetContainer'
import { NavLink } from "react-router-dom";

const ActivityContainer = (props) => {
    return(
    <div>
        <div>Activity Container</div>
        <NavLink to="reading_tweet">Literary Tweets</NavLink>
        <br />
        <NavLink to="vocab">Vocabulary Activity</NavLink>
    </div>
    )
}

export default ActivityContainer