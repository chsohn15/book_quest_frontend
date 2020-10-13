import React from 'react'

const Tweet = (props) => {
    const { id, created_at, submission } = props.tweet
    const { name, image_url } = props.tweet.character
    let date = new Date(created_at)
    let finalDate = date.toDateString()

    return(
    <div>
        <img src={image_url} style={{width: "20px"}} />
        <span>{name}</span>
        <div>{submission}</div>
        <div>{finalDate}</div>
        <button>-</button>
    </div>
    )
}

export default Tweet