import React from 'react'
import { useSelector } from "react-redux";

const BasicVocabForm = (props) => {

    const book_title  = useSelector(state => state.currentBookReducer.currentBook.book.title)

    return(
    <div>
        <div>Create a New Vocabulary Word for <em>{book_title}</em></div>
        <form>
            <label>New Vocabulary Word from the Text: </label>
            <input></input><br />
            <label>Original Sentence from Book with Word: </label>
            <textarea></textarea><br />
            <label>Definition: </label>
            <textarea></textarea><br />
            <label>Your Original Sentence: </label>
            <textarea></textarea><br />
        </form>
    </div>
    )
}

export default BasicVocabForm