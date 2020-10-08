import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
    
    const [bookTitle, changeBookTitle] = useState("")


    return(
        <div>
            <form onSubmit={(e) => props.handleSearch(e, bookTitle)}>
                <label>Book Title: </label>
                <input type="text" onChange={(e) => changeBookTitle(e.target.value)}/><br />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SearchBar