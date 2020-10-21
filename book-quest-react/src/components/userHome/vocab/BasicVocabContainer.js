import React from 'react'
import BasicVocabForm from './BasicVocabForm.js'
import VocabList from './VocabList.js'
import { useSelector } from "react-redux";



const BasicVocabContainer = (props) => {
    const current_book_status = useSelector(state => state.currentBookReducer.currentBook.status)
    const vocabArray = useSelector(state => state.userReducer.currentUser.all_vocab)
  


    if (current_book_status === 500){
        return(
            <div>Add a Book to 'Currently Reading' to Start Adding Vocab Cards!</div>
        )
    }
    return(
    <div>
        <h1>Vocabulary Cards</h1>
        <h3>Earn five stars for each vocabulary card you create!</h3>
        <BasicVocabForm />
     
        {vocabArray.length > 0 ? <VocabList /> : null}
        
    </div>
    )
}

export default BasicVocabContainer