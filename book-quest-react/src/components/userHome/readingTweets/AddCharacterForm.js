import React from 'react'
import { connect } from 'react-redux'
import { addingCharacterToBook } from '../../../redux/actions.js'
import { useSelector } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const AddCharacterForm = (props) => {

    const book_id = useSelector(state => state.currentBookReducer.currentBook.book_id)

    return(
    <div>
        <form onSubmit={(e) => props.addingCharacterToBook(e, book_id)}>
        <Form.Group as={Row}>
            <Form.Label column sm="2" style={{fontSize: "15px", fontFamily: "'Lato', sans-serif"}}><strong>Character Name:</strong></Form.Label>
                <Col sm="6">
                    <Form.Control type="text" name="character" style={{marginLeft: "15px"}}></Form.Control><br />
                </Col>
        </Form.Group>
        <Form.Group as={Row} >
            <Form.Label column sm="2" style={{fontSize: "15px", fontFamily: "'Lato', sans-serif"}}><strong>Image URL:</strong></Form.Label>
                <Col sm="6">
                    <Form.Control type="text" name="image-url" style={{marginLeft: "15px"}}></Form.Control><br />
                </Col>
        </Form.Group>
        <Button type="submit" variant="light" style={{backgroundColor: "#00ACEE", color: 'white'}}>Add Character</Button>
        </form>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addingCharacterToBook : (e, book_id) => { dispatch( addingCharacterToBook (e, book_id) )},
  
})

export default connect(null, mapDispatchToProps)(AddCharacterForm)