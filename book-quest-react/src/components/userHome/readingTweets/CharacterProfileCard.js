import React from 'react'
//import { connect } from 'react-redux'
import { useSelector } from "react-redux";

const CharacterProfileCard = (props) => {

    // Map state to props
    const { id, name, image_url } = useSelector(state => state.currentBookReducer.currentBook.twitter_character)


    return(<div>
        <div>Character Profile Card</div>
        <img src={image_url} style={{ width: "100px"}}/>
        <div>{name}</div>
        </div>)
}

// const mapStateToProps = (state) 
export default CharacterProfileCard