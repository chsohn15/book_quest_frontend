import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard.js'

const CharacterSelectContainer = (props) => {

    return(
    <div>
        <div>Select a Character From Your Book:</div>
        {props.characters.map(character => (<CharacterCard student_book_id={props.student_book_id} character={character} key={character.id}/>))}
    </div>
    )
}

const mapStateToProps = (state) => {
    return {characters: state.currentBookReducer.currentBook.book.characters, student_book_id: state.currentBookReducer.currentBook.id}
}
export default connect(mapStateToProps)(CharacterSelectContainer)