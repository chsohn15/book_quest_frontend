import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard.js'
import { useState } from 'react'
import AddCharacterForm from './AddCharacterForm.js'

const CharacterSelectContainer = (props) => {

    const [showForm, changeShowForm] = useState(false)

    return(
    <div>
        {showForm ? <button onClick={() => changeShowForm(!showForm)}>Hide Form</button>
        :  <button onClick={() => changeShowForm(!showForm)}>Add Another Character to This Book</button>}
        
        {showForm ? <AddCharacterForm />: null}
        <div>Select a Character From Your Book:</div>
        {props.characters.map(character => (<CharacterCard student_book_id={props.student_book_id} character={character} key={character.id}/>))}
    </div>
    )
}

const mapStateToProps = (state) => {
    return {characters: state.currentBookReducer.currentBook.book.characters, student_book_id: state.currentBookReducer.currentBook.id}
}
export default connect(mapStateToProps)(CharacterSelectContainer)