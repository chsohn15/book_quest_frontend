import React from 'react'
import { useEffect } from 'react'

const VocabList = (props) => {
    
    useEffect(() => {
        console.log("Hello")
    }, [])

    return(
    <div>
        <div>List of All Vocabulary Words</div>

    </div>
    )
}

export default VocabList