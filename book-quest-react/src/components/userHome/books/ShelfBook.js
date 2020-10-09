import React from 'react'

const ShelfBook = (props) => {
    const {title, author, total_pages, image_url, ISBN_number} = props.book
    
    return(
        <div>
            <img src={image_url} alt="book"/>
            <div>{title}</div>
            <div>{author}</div>
            <button >Add to 'Currently Reading'</button>
        </div>
    )
}

export default ShelfBook