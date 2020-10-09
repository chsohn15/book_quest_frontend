import React from 'react'
import ShelfBook from './ShelfBook'
import { connect } from 'react-redux'


const UserBookShelf = (props) => {
    debugger
    return(
        <div>
            User Book Shelf
            {/* {props.books.map(book => <ShelfBook book={book}/>)} */}
        </div>
    )
}


const mapStateToProps = state => {
    return state.booksReducer.books
}

export default connect(mapStateToProps)(UserBookShelf)