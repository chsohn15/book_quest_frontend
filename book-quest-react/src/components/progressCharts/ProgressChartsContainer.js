import React from 'react'
import TweetProgressChart from './TweetProgressChart.js'
// import { useSelector } from "react-redux";


const ProgressChartsContainer = (props) => {

    // const { total_points, streak }  = useSelector(state => state.userReducer.currentUser)

    return(
        <div>
            <div>Progress Chart Container</div>
            <TweetProgressChart />
        </div>
    )
}

export default ProgressChartsContainer