import React from 'react'
import { useSelector } from "react-redux";
import { submittingVocab, loadingUser } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

const BasicVocabForm = (props) => {

    const [word, changeWord] = useState("")
    const [sentence_from_book, changeBookSentence] = useState("")
    const [definition, changeDefinition] = useState("")
    const [original_sentence, changeOriginalSentence] = useState("")
    const [formHidden, changeFormHidden] = useState(true)
    const [buttonText, changeButtonText] = useState("Create New Card")
 

    const book_title  = useSelector(state => state.currentBookReducer.currentBook.book.title)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)
    const point_value = 10
    
    const handleClick = () => {
        changeFormHidden(!formHidden)

        if (buttonText === "Create New Card") {
            changeButtonText("Hide Form")
        }
        else {
            changeButtonText("Create New Card")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value)
       
        Swal.fire({
            imageUrl: "https://pngimg.com/uploads/star/star_PNG41463.png",
            position: 'center',
            title: 'Nice Work! You earned 10 stars!',
            showConfirmButton: false,
            timer: 2000
          })

        setTimeout(function(){props.loadingUser()}, 1000) // load user to fetch new streak
    }

    return(
    <div style={{fontFamily: "'Lato', sans-serif", fontSize: "15px"}}>
        <button onClick={() => handleClick()} style={{marginLeft: "515px"}}>{buttonText}</button>
        <br/>
        {formHidden === false ? 
        <div>
        <h4 style={{marginLeft: '100px', marginTop: '20px'}}>Create a New Vocabulary Card for <em>{book_title}</em> :</h4><br/>
        <form onSubmit={(e) => handleSubmit(e) } style={{marginLeft: '100px', marginRight: '220px'}}>
            <Form.Group as={Row}>
            <Form.Label column sm="2" style={{fontSize: "15px"}}><strong>Word from the Text: </strong></Form.Label>
            <Col sm="10">
                <Form.Control type="text" onChange={(e)=> changeWord(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2"><strong>Model Sentence from Book: </strong></Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeBookSentence(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2"><strong>Definition: </strong></Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeDefinition(e.target.value)}></Form.Control><br />
            </Col>
            <Form.Label column sm="2"><strong>My Original Sentence: </strong></Form.Label>
            <Col sm="10">
                <Form.Control  as="textarea" rows={2} onChange={(e)=> changeOriginalSentence(e.target.value)}></Form.Control><br />
            </Col>
            <input type="submit" value="Submit" style={{marginLeft: "920px"}}></input>
       
        </Form.Group>
        </form>
        </div>
        : null}
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    submittingVocab: (e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value) => { dispatch( submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence, point_value) )},
    loadingUser: () => { dispatch( loadingUser())}
})

export default connect(null, mapDispatchToProps)(BasicVocabForm)