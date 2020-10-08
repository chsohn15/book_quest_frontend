import React from 'react'


const SearchBar = (props) => {
    
    const handleSearch = (e) => {
        debugger
    }

    return(
        <div>
            <form onSubmit={(e) => handleSearch(e)}>
                <label>Book Title: </label>
                <input type="text"/><br />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SearchBar