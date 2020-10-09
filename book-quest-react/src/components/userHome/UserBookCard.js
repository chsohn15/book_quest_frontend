import React from 'react';
import { connect } from 'react-redux'

const UserBookCard = (props) => {

    const {title, author, image_url, total_pages, ISBN_number} = props.book

    return(
        <div>
            <div>Book Card</div>
            <img src={image_url}></img>
            <div>{title}</div>
            <div>{author}</div>
            <div>{total_pages}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {book: state.currentBook}
}
export default connect(mapStateToProps)(UserBookCard)