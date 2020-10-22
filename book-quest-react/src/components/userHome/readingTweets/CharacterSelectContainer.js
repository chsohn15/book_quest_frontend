import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from './CharacterCard.js'
import { useState } from 'react'
import AddCharacterForm from './AddCharacterForm.js'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const CharacterSelectContainer = (props) => {



    const [showForm, changeShowForm] = useState(false)

    return(
    <div>
        {showForm ? 
            <React.Fragment>
                <Button variant="light" style={{backgroundColor: "#00ACEE", color: 'white',marginBottom: "10px"}}  onClick={() => changeShowForm(!showForm)}>Hide Form</Button><br/>
            </React.Fragment>
        :  <Button type="submit" variant="light" style={{backgroundColor: "#00ACEE", color: 'white'}} onClick={() => changeShowForm(!showForm)}>Add Another Character to This Book</Button>}
        
        {showForm ? <AddCharacterForm />: null}
        <h6 style={{marginTop: '10px'}}>Select a Character From Your Book:</h6>
        {props.characters.map(character => (<CharacterCard student_book_id={props.student_book_id} character={character} key={character.id}/>))}
    </div>
    )
}

const mapStateToProps = (state) => {
    return {characters: state.currentBookReducer.currentBook.book.characters, student_book_id: state.currentBookReducer.currentBook.id}
}


export default connect(mapStateToProps)(CharacterSelectContainer)