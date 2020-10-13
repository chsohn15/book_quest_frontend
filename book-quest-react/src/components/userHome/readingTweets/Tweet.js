import React from 'react'
import { deletingTweet } from '../../../redux/actions.js'
import { connect } from 'react-redux'

const Tweet = (props) => {
    const { id, created_at, submission } = props.tweet
    const { name, image_url } = props.tweet.character
    const date = new Date(created_at)
    const finalDate = date.toDateString()

    return(
    <div>
        <img src={image_url} style={{width: "20px"}} />
        <span>{name}</span>
        <div>{submission}</div>
        <div>{finalDate}</div>
        <button onClick={() => props.deletingTweet(id)}>-</button>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    deletingTweet: (tweet_id) => { dispatch( deletingTweet(tweet_id) )}
})

export default connect(null, mapDispatchToProps)(Tweet)