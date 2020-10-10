import React from 'react'
// import { connect } from 'react-redux'

const CharacterCard = (props) => {
    const { id, name, image_url } = props.character

    return(
    <div style={{cursor: "pointer"}}>
        <img style={{width: "100px"}}src={image_url} alt={name}/>
        <div>{name}</div>
    </div>
    )
}

export default CharacterCard