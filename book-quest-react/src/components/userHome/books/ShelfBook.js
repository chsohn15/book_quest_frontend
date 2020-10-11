import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'
import { filterBookShelf } from '../../../redux/actions.js'
import { removingFromShelf } from '../../../redux/actions.js'
import { useSelector } from "react-redux";

const ShelfBook = (props) => {
    const { id, title, author, total_pages, image_url, ISBN_number } = props.book
    const student_id   = useSelector(state => state.userReducer.currentUser.id)
    
    const handleClick = (id) => {
        props.addingCurrentBook(id)
        props.filterBookShelf(id)
    }

    return(
        <div>
            <img src={image_url} alt="book"/>
            <div>{title}</div>
            <div>{author}</div>
            <button onClick={() => handleClick(id)}>Add to 'Currently Reading'</button>
            <button onClick={() => props.removingFromShelf(student_id, id)}>Remove from shelf</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )},
    filterBookShelf: (book_id) => { dispatch( filterBookShelf(book_id) )},
    removingFromShelf: (student_id, book_id) => { dispatch( removingFromShelf(student_id, book_id) )}
})

export default connect(null, mapDispatchToProps)(ShelfBook)