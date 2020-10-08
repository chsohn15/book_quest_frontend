import React from 'react'
//import { useState } from 'react'

const BookCard = (props) => {
    const {title, authorsArray, publisher, publishedDate, description, pageCount, image_url, ISBN} = props

    return(
        <div>
            <img src={image_url} alt="book photo"/>
            <div>{title}</div>
            By {authorsArray.map(author => <div>{author}</div>)}
            <div>ISBN number: {ISBN}</div>
            <div>Publisher: {publisher}</div>
            <div>Published Date: {publishedDate}</div>
            <div>Description: {description}</div>
            <div>Pages: {pageCount}</div>
        </div>
    )
}

export default BookCard