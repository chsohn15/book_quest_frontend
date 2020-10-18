import React from 'react'
import { connect } from 'react-redux'

const CardBack = (props) => {

    const { id, definition, sentence_from_book, original_sentence } = props.vocab
    const book_title = props.book_title


    return(
    <div>
        <div>Definition: {definition}</div>
        <div>Sentence from <em>{book_title}</em>: {sentence_from_book}</div>
        <div>Original Sentence: {original_sentence}</div>
        <button>Delete Card</button>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    //deletingVocab: () => { dispatch( deletingVocab() )},
    
})

export default connect(null, mapDispatchToProps)(CardBack)
