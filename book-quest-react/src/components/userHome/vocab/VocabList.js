import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import VocabCard from './VocabCard.js'
// import { loadingVocab } from '../../../redux/actions.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const VocabList = (props) => {
    
    const vocab_array  = useSelector(state => state.userReducer.currentUser.all_vocab)

    return(
    <Container>
        <Row>
        {vocab_array.map(vocab => <VocabCard vocab={vocab}/>)}
        </Row>
    </Container>
    )
}



export default VocabList
