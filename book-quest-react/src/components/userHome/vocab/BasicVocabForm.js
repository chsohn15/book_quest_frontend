import React from 'react'
import { useSelector } from "react-redux";
import { submittingVocab } from '../../../redux/actions.js'
import { connect } from 'react-redux'
import { useState } from 'react'

const BasicVocabForm = (props) => {

    const [word, changeWord] = useState("")
    const [sentence_from_book, changeBookSentence] = useState("")
    const [definition, changeDefinition] = useState("")
    const [original_sentence, changeOriginalSentence] = useState("")

    const book_title  = useSelector(state => state.currentBookReducer.currentBook.book.title)
    const student_book_id = useSelector(state => state.currentBookReducer.currentBook.id)

    return(
    <div>
        <div>Create a New Vocabulary Word for <em>{book_title}</em></div>
        <form onSubmit={(e) => props.submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence)}>
            <label>New Vocabulary Word from the Text: </label>
            <input type="text" onChange={(e)=> changeWord(e.target.value)}></input><br />
            <label>Sentence from Book with Word: </label>
            <textarea onChange={(e)=> changeBookSentence(e.target.value)}></textarea><br />
            <label>Definition: </label>
            <textarea onChange={(e)=> changeDefinition(e.target.value)}></textarea><br />
            <label>Your Original Sentence: </label>
            <textarea onChange={(e)=> changeOriginalSentence(e.target.value)}></textarea><br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    submittingVocab: (e, student_book_id, word, definition, sentence_from_book, original_sentence) => { dispatch( submittingVocab(e, student_book_id, word, definition, sentence_from_book, original_sentence) )},
    
})

export default connect(null, mapDispatchToProps)(BasicVocabForm)