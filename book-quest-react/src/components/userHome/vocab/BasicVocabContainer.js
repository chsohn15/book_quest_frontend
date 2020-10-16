import React from 'react'
import BasicVocabForm from './BasicVocabForm.js'
import VocabList from './VocabList.js'
import { useSelector } from "react-redux";

const BasicVocabContainer = (props) => {

    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)

    if (current_book_status === 500){
        return(
            <div>Add a Book to 'Currently Reading' to Start Adding Vocab Cards!</div>
        )
    }
    return(
    <div>
        <div>Basic Vocab Container</div>
        <BasicVocabForm />
        <VocabList />
    </div>
    )
}

export default BasicVocabContainer