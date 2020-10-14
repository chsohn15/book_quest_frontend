import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import VocabCard from './VocabCard.js'
// import { loadingVocab } from '../../../redux/actions.js'

const VocabList = (props) => {
    
    const vocab_array  = useSelector(state => state.userReducer.currentUser.all_vocab)

    return(
    <div>
        <div>List of All Vocabulary Words</div><br />
        {vocab_array.map(vocab => <VocabCard vocab={vocab}/>)}
    </div>
    )
}



export default VocabList
