import React from 'react'
import { connect } from 'react-redux'
//import { useState } from 'react'
import { addingBook } from '../../redux/actions.js'
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

const BookCard = (props) => {
    const {title, authorsArray, publisher, publishedDate, description, pageCount, image_url, ISBN} = props
    
    const first_author = authorsArray[0]

    const handleClick = (title, first_author, ISBN, image_url, pageCount) => {
        props.addingBook(title, first_author, ISBN, image_url, pageCount)

        Swal.fire({
            text: `You've added ${title} to your bookshelf!`,
            imageUrl: image_url,
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
    }
    
    
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
                <button onClick={() => handleClick(title, first_author, ISBN, image_url, pageCount)}>Add to Book Shelf</button>
            </NavLink>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        addingBook: (title, first_author, ISBN, image_url, pageCount) => { dispatch( addingBook(title, first_author, ISBN, image_url, pageCount) )}
})

export default connect(null, mapDispatchToProps)(BookCard)