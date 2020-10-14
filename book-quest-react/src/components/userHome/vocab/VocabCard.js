import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { useState } from 'react'

const VocabCard = (props) => {

    const { word } = props.vocab.vocab 
    const book_title = props.vocab.book_title

    const [flipped, flipCard] = useState(false)

    return(
    <div onClick={() => flipCard(!flipped)}>
        {flipped == false ? <CardFront word={word}/> : <CardBack vocab={props.vocab.vocab} book_title={book_title}/>}

    </div>
    )
}



export default VocabCard
