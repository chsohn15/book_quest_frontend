import React from 'react';
import { connect } from 'react-redux'

const CurrentBookCard = (props) => {

    const {title, author, image_url, total_pages, ISBN_number} = props.book

    return(
        <div>
            <div>Currently Reading</div>
            <img src={image_url}></img>
            <div>{title}</div>
            <div>{author}</div>
            <div>{total_pages}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {book: state.currentBookReducer.currentBook}
}
export default connect(mapStateToProps)(CurrentBookCard)