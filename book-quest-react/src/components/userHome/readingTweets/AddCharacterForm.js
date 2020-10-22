import React from 'react'
import { connect } from 'react-redux'
import { addingCharacterToBook } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddCharacterForm = (props) => {

    const book_id = useSelector(state => state.currentBookReducer.currentBook.book_id)

    return(
    <div>
        <form onSubmit={(e) => props.addingCharacterToBook(e, book_id)}>
        <Form.Group>
        <Form.Label>Character Name:</Form.Label>
        <Form.Control type="text" name="character"></Form.Control><br />
        <Form.Label>Image URL:</Form.Label>
        <Form.Control type="text" name="image-url"></Form.Control><br />
        <Button type="submit" variant="light" style={{backgroundColor: "#323099", color: 'white'}}>Add Character</Button>
        </Form.Group>
        </form>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addingCharacterToBook : (e, book_id) => { dispatch( addingCharacterToBook (e, book_id) )},
  
})

export default connect(null, mapDispatchToProps)(AddCharacterForm)