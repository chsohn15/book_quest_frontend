import React from 'react'

const CardBack = (props) => {

    const { definition, sentence_from_book, original_sentence } = props.vocab
    const book_title = props.book_title

    return(
    <div>
        <div>Definition: {definition}</div>
        <div>Sentence from <em>{book_title}</em>: {sentence_from_book}</div>
        <div>Original Sentence: {original_sentence}</div>
    </div>
    )
}



export default CardBack