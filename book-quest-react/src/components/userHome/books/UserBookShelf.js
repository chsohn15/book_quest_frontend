import React from 'react'
import ShelfBook from './ShelfBook'
import { connect } from 'react-redux'


const UserBookShelf = (props) => {

    return(
        <div>
            User Book Shelf
            {props.books.map(book => <ShelfBook book={book}/>)}
        </div>
    )
}


const mapStateToProps = state => {
    return {books: state.booksReducer.books}
}

export default connect(mapStateToProps)(UserBookShelf)