import React from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'
import { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

const googleRootURL ="https://www.googleapis.com/books/v1/volumes?q=" // + bookTitle
const googleAPIKey = `&apiKey=${process.env.GOOGLE_BOOKS_API_KEY}`


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
            new_array = books.map((book, index) => {
                if (book.volumeInfo.imageLinks && book.volumeInfo.industryIdentifiers && book.volumeInfo.authors){
                return (
                <BookCard 
                key={index}
                title={book.volumeInfo.title} 
                authorsArray={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                publishedDate={book.volumeInfo.publishedDate}
                description={book.volumeInfo.description}
                pageCount={book.volumeInfo.pageCount}
                image_url={book.volumeInfo.imageLinks.thumbnail}
                ISBN={book.volumeInfo.industryIdentifiers[0].identifier} />)
                }
                else return null
            })
        }
        return new_array
    }

    return(
        <div>
            <Jumbotron style={{backgroundImage: 'url("https://bloomerang.co/wp-content/uploads/2020/06/floating-book-header.png")', 
                            backgroundSize: 'cover', height: '50vh'}}>
                <h2 style={{color: 'white', marginTop: '-25px'}}>Search for Books to Add to Your Bookshelf!</h2>
                <SearchBar handleSearch={handleSearch}/>
            </Jumbotron>
            {filterBookData(books)}
        </div>
    )
}

export default BookSearchContainer