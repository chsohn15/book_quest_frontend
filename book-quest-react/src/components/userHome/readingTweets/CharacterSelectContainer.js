import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard.js'

const CharacterSelectContainer = (props) => {

    return(
    <div>
        <div>Select a Character From Your Book:</div>
        {props.characters.map(character => (<CharacterCard character={character}/>))}
    </div>
    )
}

const mapStateToProps = (state) => {
    return {characters: state.currentBookReducer.currentBook.book.characters}
}
export default connect(mapStateToProps)(CharacterSelectContainer)