import React from 'react'
import ShelfBook from './ShelfBook'
import { connect } from 'react-redux'
import { loadingBooks } from '../../../redux/actions.js'
import { useEffect } from 'react'


const UserBookShelf = (props) => {

    useEffect(() => {
        props.loadingBooks()
    }, [])

    return(
        <div>
            User Book Shelf
            {props.books.map(book => <ShelfBook book={book} key={book.id}/>)}
        </div>
    )
}


const mapStateToProps = state => {
    return {books: state.booksReducer.books}
}

const mapDispatchToProps = (dispatch) => ({
    loadingBooks: () => { dispatch( loadingBooks() )}
})

export default connect(mapStateToProps, mapDispatchToProps)(UserBookShelf)