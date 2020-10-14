import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadingAllTweets } from '../../../redux/actions.js'

const AllTweets = (props) => {

    useEffect(() => {
        props.loadingAllTweets()
    }, [])

    return(
    <div>
        <div>List of All Tweets by a User</div>

    </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        loadingAllTweets: (() => {{ dispatch( loadingAllTweets() )}
    })}}

export default connect(null, mapDispatchToProps)(AllTweets)