import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { useEffect } from 'react'
import { loadingTweetData } from '../../redux/actions.js'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";


const TweetProgressChart = (props) => {

    useEffect(() => {
        props.loadingTweetData()
    }, [])
    
    const tweetData  = useSelector(state => state.tweetDataReducer.tweetData)
    
    //const tweetData2 = tweetData.map(tweet_hash => tweet_hash.date = new Date(tweet_hash.date))
        
    return(
        <div>
            <div>Tweet Progress Chart</div>
            <BarChart width={730} height={250} data={tweetData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tweet_count" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadingTweetData: () => { dispatch( loadingTweetData() )},

})

export default connect(null, mapDispatchToProps)(TweetProgressChart)