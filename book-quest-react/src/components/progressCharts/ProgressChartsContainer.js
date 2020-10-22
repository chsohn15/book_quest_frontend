import React from 'react'
import Chart from './Chart.js'

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadingTweetData } from '../../redux/actions.js'
import { loadingVocabData } from '../../redux/actions.js'
import { useSelector } from "react-redux";


const ProgressChartsContainer = (props) => {

    useEffect(() => {
        props.loadingTweetData()
        props.loadingVocabData()
    }, [])

    const tweetData  = useSelector(state => state.tweetDataReducer.tweetData)
    const vocabData  = useSelector(state => state.vocabDataReducer.vocabData)

    return(
        <div>

            <h3 style={{marginLeft: "200px", fontFamily: "'Kalam', cursive"}}>Lit Tweets Progress Chart</h3><br />
            { tweetData.length === 0 ? 
            <div>Add Tweets to See Your Progress!</div> : null}
            <Chart data={tweetData} dataKey={"tweet_count"} name={"Tweets"} fill={"#82ca9d"}/><br />
            <h3 style={{marginLeft: "200px", fontFamily: "'Kalam', cursive"}}>Flash Vocab Progress Chart</h3><br />
            { vocabData.length === 0 ? 
            <div>Add Vocab Cards to See Your Progress!</div> : null}
            <Chart data={vocabData} dataKey={"vocab_count"} name={"Vocab Activities"} fill={"#8884d8"}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadingTweetData: () => { dispatch( loadingTweetData() )},
    loadingVocabData: () => { dispatch( loadingVocabData() )}
})

export default connect(null, mapDispatchToProps)(ProgressChartsContainer)