import React from 'react'
import { connect } from 'react-redux'
//import { useState } from 'react'
import { addingBook } from '../../redux/actions.js'
import { NavLink } from "react-router-dom";

const BookCard = (props) => {
    const {title, authorsArray, publisher, publishedDate, description, pageCount, image_url, ISBN} = props
    
    const first_author = authorsArray[0]

    return(
        <div>
            <img src={image_url} alt="book"/>
            <div>{title}</div>
            By {authorsArray.map(author => <div>{author}</div>)}
            <div>ISBN number: {ISBN}</div>
            <div>Publisher: {publisher}</div>
            <div>Published Date: {publishedDate}</div>
            <div>Description: {description}</div>
            <div>Pages: {pageCount}</div>
            <NavLink to="user_home">
                <button onClick={() => props.addingBook(title, first_author, ISBN, image_url, pageCount)}>Add to Book Shelf</button>
            </NavLink>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        addingBook: (title, first_author, ISBN, image_url, pageCount) => { dispatch( addingBook(title, first_author, ISBN, image_url, pageCount) )}
})

export default connect(null, mapDispatchToProps)(BookCard)