import React from 'react'
import { useSelector } from "react-redux";
import { submittingVocab } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BasicVocabForm = (props) => {

    const [word, changeWord] = useState("")
    const [sentence_from_book, changeBookSentence] = useState("")
    const [definition, changeDefinition] = useState("")
    const [original_sentence, changeOriginalSentence] = useState("")

    const book_title  = useSelector(state => state.currentBookReducer.currentBook.book.title)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)
    const point_value = 5 
    
    return(
    <div>
        <div>Create a New Vocabulary Word for <em>{book_title}</em></div>
        <Form.Group as={Row} onSubmit={(e) => props.submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value)}>
            <Form.Label column sm="2">New Vocabulary Word from the Text: </Form.Label>
            <Col sm="10">
                <Form.Control type="text" onChange={(e)=> changeWord(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2">Sentence from Book with Word: </Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeBookSentence(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2">Definition: </Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeDefinition(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2">Your Original Sentence: </Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeOriginalSentence(e.target.value)}></Form.Control><br />
            </Col>
            <input type="submit" value="Submit"></input>
        </Form.Group>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    submittingVocab: (e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value) => { dispatch( submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value) )},
    
})

export default connect(null, mapDispatchToProps)(BasicVocabForm)