import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const VocabCard = (props) => {

    const { word } = props.vocab.vocab 
    const book_title = props.vocab.book_title

    const [flipped, flipCard] = useState(false)

    return(
       <div >
            <div style={{cursor: "pointer", width: '400px', height: '200px', paddingRight: "550px", marginBottom: '150px', marginTop: '20px'}} onClick={() => flipCard(!flipped)}>
            {flipped === false ? <CardFront word={word}/> : <CardBack vocab={props.vocab.vocab} book_title={book_title}/>}
            <br />
        </div>
    </div>
    )
}





export default VocabCard
