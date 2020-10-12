import React from 'react'

const Tweet = (props) => {
    const { submission } = props.tweet
    const { name, image_url } = props.tweet.character

    return(
    <div>
        <img src={image_url} style={{width: "20px"}} />
        <span>{name}</span>
        <div>{submission}</div>
    </div>
    )
}

export default Tweet