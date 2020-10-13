import React from 'react'
import BasicVocabForm from './BasicVocabForm.js'
import VocabList from './VocabList.js'

const BasicVocabContainer = (props) => {

    return(
    <div>
        <div>Basic Vocab Container</div>
        <BasicVocabForm />
        <VocabList />
    </div>
    )
}

export default BasicVocabContainer