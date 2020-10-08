import React from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'
import { useState } from 'react'

const googleRootURL ="https://www.googleapis.com/books/v1/volumes?q=" // + bookTitle
const googleAPIKey = "&apiKey=AIzaSyCIrIcg2DTV9incgpEyC3XsmmQDSK0-xfQ"

const BookSearchContainer = (props) => {

    const [books, addBooks] = useState([])
    

    const handleSearch = (e, bookTitle) => {
        e.preventDefault()
        
        fetch(googleRootURL + bookTitle + googleAPIKey)
        .then(res => res.json())
        .then(bookData => addBooks(bookData.items))

        e.target.reset()
    }

    const filterBookData = (books) => {
        let new_array = [];
        if (books !== []){
            new_array = books.map(book => {
                return (
                <BookCard 
                title={book.volumeInfo.title} 
                authorsArray={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                publishedDate={book.volumeInfo.publishedDate}
                description={book.volumeInfo.description}
                pageCount={book.volumeInfo.pageCount}
                image_url={book.volumeInfo.imageLinks.thumbnail} />)
            })
        }
        return new_array
    }

    return(
        <div>
            <h3>Search for Your Choice Book!</h3>
            <SearchBar handleSearch={handleSearch}/>
            {filterBookData(books)}
        </div>
    )
}

export default BookSearchContainer