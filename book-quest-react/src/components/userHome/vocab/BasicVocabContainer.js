import React from 'react'
import BasicVocabForm from './BasicVocabForm.js'
import VocabList from './VocabList.js'
import { useSelector } from "react-redux";

const BasicVocabContainer = (props) => {

    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)
    const vocabData = useSelector(state => state.vocabDataReducer.vocabData)

    if (current_book_status === 500){
        return(
            <div>Add a Book to 'Currently Reading' to Start Adding Vocab Cards!</div>
        )
    }
    return(
    <div>
        <div>Basic Vocab Container</div>
        <BasicVocabForm />
        {vocabData.length > 0 ? <VocabList /> : null}
        
    </div>
    )
}

export default BasicVocabContainer