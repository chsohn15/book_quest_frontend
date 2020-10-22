import React from 'react'
import { connect } from 'react-redux'
//import { useState } from 'react'
import { addingBook } from '../../redux/actions.js'
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button'

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
        <div style={{marginTop:"20px", fontSize:'17px'}}>
            <img src={image_url} alt="book"/>
            <div style={{marginTop:'10px'}}><em><strong>{title}</strong></em></div>
            Author: {authorsArray.map(author => <span>{author}</span>)}
            <div>ISBN number: {ISBN}</div>
            <div>Publisher: {publisher}</div>
            <div>Published Date: {publishedDate}</div>
            <div>Description: {description}</div>
            <div>Pages: {pageCount}</div>
            <NavLink to="user_home">
                <Button variant="outline-dark" style={{marginTop:'10px'}} onClick={() => handleClick(title, first_author, ISBN, image_url, pageCount)}>Add to Book Shelf</Button>
            </NavLink>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        addingBook: (title, first_author, ISBN, image_url, pageCount) => { dispatch( addingBook(title, first_author, ISBN, image_url, pageCount) )}
})

export default connect(null, mapDispatchToProps)(BookCard)