import React from 'react'
import { connect } from 'react-redux'
import { addingCurrentBook } from '../../../redux/actions.js'

const ShelfBook = (props) => {
    const {id, title, author, total_pages, image_url, ISBN_number} = props.book
    
    return(
        <div>
            <img src={image_url} alt="book"/>
            <div>{title}</div>
            <div>{author}</div>
            <button onClick={() => props.addingCurrentBook(id)}>Add to 'Currently Reading'</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addingCurrentBook: (book_id) => { dispatch( addingCurrentBook(book_id) )}
})

export default connect(null, mapDispatchToProps)(ShelfBook)