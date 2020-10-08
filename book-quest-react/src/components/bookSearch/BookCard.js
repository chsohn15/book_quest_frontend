import React from 'react'
import { useState } from 'react'

const BookCard = (props) => {
    const {title, authorsArray, publisher, publishedDate, description, pageCount, image_url} = props

    return(
        <div>
            <img src={image_url} />
            <div>{title}</div>
            By {authorsArray.map(author => <div>{author}</div>)}
            <div>Publisher: {publisher}</div>
            <div>Published Date: {publishedDate}</div>
            <div>Description: {description}</div>
            <div>Pages: {pageCount}</div>
        </div>
    )
}

export default BookCard