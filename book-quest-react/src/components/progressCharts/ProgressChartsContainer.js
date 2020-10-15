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
            <div>Progress Chart Container</div><br />
            <div>Tweet Progress Chart</div><br />
            <Chart data={tweetData} dataKey={"tweet_count"} name={"Tweets"}/><br />
            <div>Vocab Progress Chart</div><br />
            <Chart data={vocabData} dataKey={"vocab_count"} name={"Vocab Activities"}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadingTweetData: () => { dispatch( loadingTweetData() )},
    loadingVocabData: () => { dispatch( loadingVocabData() )}
})

export default connect(null, mapDispatchToProps)(ProgressChartsContainer)