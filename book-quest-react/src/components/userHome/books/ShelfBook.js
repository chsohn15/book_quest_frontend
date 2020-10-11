import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'
import { filterBookShelf } from '../../../redux/actions.js'

const ShelfBook = (props) => {
    const {id, title, author, total_pages, image_url, ISBN_number} = props.book
    
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
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )},
    filterBookShelf: (book_id) => { dispatch( filterBookShelf(book_id) )}
})

export default connect(null, mapDispatchToProps)(ShelfBook)